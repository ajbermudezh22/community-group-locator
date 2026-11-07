// Community Group Locator: show the closest groups to where you live.
const homeSelect = document.getElementById('home');
const groupsEl = document.getElementById('groups');
const headingEl = document.getElementById('heading');
const daySelect = document.getElementById('day');

const SHOW = 5;
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
  const day = daySelect.value; // '' means any day

  const closest = GROUPS
    .filter(group => !day || group.day === day)
    .map(group => ({
      ...group,
      // Same neighbourhood: count it as "about half a kilometre away".
      km: group.area === home ? 0.5 : distanceKm(here, NEIGHBOURHOODS[group.area])
    }))
    .sort((a, b) => a.km - b.km)
    .slice(0, SHOW);

  headingEl.textContent = `Closest groups to ${home}${day ? ` on ${day}s` : ''}`;
  if (closest.length === 0) {
    groupsEl.innerHTML = `<p class="empty">No groups meet on ${day}s yet. Try another day.</p>`;
    return;
  }
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

daySelect.innerHTML = '<option value="">Any day</option>' +
  DAYS.map(name => `<option>${name}</option>`).join('');
daySelect.addEventListener('change', render);

render();
