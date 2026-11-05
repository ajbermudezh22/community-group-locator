// Community Group Locator: show the closest groups to where you live.
const homeSelect = document.getElementById('home');
const groupsEl = document.getElementById('groups');
const headingEl = document.getElementById('heading');

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

  const closest = GROUPS
    .map(group => ({
      ...group,
      // Same neighbourhood: count it as "about half a kilometre away".
      km: group.area === home ? 0.5 : distanceKm(here, NEIGHBOURHOODS[group.area])
    }))
    .sort((a, b) => a.km - b.km)
    .slice(0, SHOW);

  headingEl.textContent = `Closest groups to ${home}`;
  groupsEl.innerHTML = closest.map(group => `
    <article class="group">
      <div class="group-top">
        <h2>${escapeHtml(group.hosts)}</h2>
        ${group.spots > 0
          ? `<span class="pill ok">${group.spots} ${group.spots === 1 ? 'spot' : 'spots'} free</span>`
          : '<span class="pill bad">Full</span>'}
      </div>
      <span class="meta">${escapeHtml(group.area)} · ${group.km.toFixed(1)} km away</span>
      <span class="meta">${group.day}s at ${group.time}</span>
      ${group.tag ? `<span class="pill info">${escapeHtml(group.tag)}</span>` : ''}
    </article>`).join('');
}

homeSelect.innerHTML = Object.keys(NEIGHBOURHOODS)
  .map(name => `<option${name === 'Kreuzberg' ? ' selected' : ''}>${name}</option>`)
  .join('');
homeSelect.addEventListener('change', render);

render();
