// Community Group Locator: show the closest groups to where you live.
const homeSelect = document.getElementById('home');
const groupsEl = document.getElementById('groups');
const headingEl = document.getElementById('heading');
const ageSelect = document.getElementById('age');

// Age group -> the group tag that fits it. Groups without a tag welcome all ages.
const AGE_GROUPS = {
  'Any age': null,
  '18–30': 'Young adults',
  'Family with kids': 'For families',
  '30+': null
};

const SHOW = 5;

// Distance in km between two [lat, lng] points.
function distanceKm(a, b) {
  const rad = x => (x * Math.PI) / 180;
  const dLat = rad(b[0] - a[0]);
  const dLng = rad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function render() {
  const home = homeSelect.value;
  const here = NEIGHBOURHOODS[home];

  const age = ageSelect.value;
  const wanted = AGE_GROUPS[age];
  // Show groups made for this age group, plus the ones open to everyone.
  const fits = group => age === 'Any age' || !group.tag || group.tag === wanted;

  const closest = GROUPS
    .filter(fits)
    .map(group => ({
      ...group,
      // Same neighbourhood: count it as "about half a kilometre away".
      km: group.area === home ? 0.5 : distanceKm(here, NEIGHBOURHOODS[group.area])
    }))
    .sort((a, b) => a.km - b.km)
    .slice(0, SHOW);

  // Recommend the closest group with free spots, preferring an exact age match.
  const open = closest.filter(group => group.spots > 0);
  const pick = (wanted && open.find(group => group.tag === wanted)) || open[0];
  const list = pick ? [pick, ...closest.filter(group => group !== pick)] : closest;

  headingEl.textContent = `Closest groups to ${home}` + (age === 'Any age' ? '' : ` for ${age}`);
  groupsEl.innerHTML = list.map(group => `
    <article class="group${group === pick ? ' recommended' : ''}">
      ${group === pick ? '<span class="pill ok">★ Recommended for you</span>' : ''}
      <div class="group-top">
        <h2>${escapeHtml(group.hosts)}</h2>
        ${group.spots > 0
          ? `<span class="pill ok">${group.spots} ${group.spots === 1 ? 'spot' : 'spots'} free</span>`
          : '<span class="pill bad">Full</span>'}
      </div>
      <span class="meta">${escapeHtml(group.area)} · ${group.km.toFixed(1)} km away</span>
      <span class="meta">${group.day}s at ${group.time}</span>
      <span class="pill info">${escapeHtml(group.tag || 'All ages')}</span>
    </article>`).join('');
}

homeSelect.innerHTML = Object.keys(NEIGHBOURHOODS)
  .map(name => `<option${name === 'Kreuzberg' ? ' selected' : ''}>${name}</option>`)
  .join('');
homeSelect.addEventListener('change', render);
ageSelect.innerHTML = Object.keys(AGE_GROUPS).map(name => `<option>${name}</option>`).join('');
ageSelect.addEventListener('change', render);

render();
