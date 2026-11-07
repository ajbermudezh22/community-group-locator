// Community Group Locator: show the closest groups to where you live.
const homeSelect = document.getElementById('home');
const groupsEl = document.getElementById('groups');
const headingEl = document.getElementById('heading');
const mapEl = document.getElementById('map');

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
  renderMap(home, closest);
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

// Turn [lat, lng] into x, y on the 320 x 230 map (a simple flat projection).
function toMap([lat, lng]) {
  const x = 20 + ((lng - 13.19) / 0.32) * 280;
  const y = 20 + ((52.60 - lat) / 0.15) * 190;
  return [x.toFixed(1), y.toFixed(1)];
}

// Draw one dot per neighbourhood with groups; bigger dot = more groups.
function renderMap(home, closest) {
  const nearAreas = new Set(closest.map(group => group.area));
  const counts = {};
  GROUPS.forEach(group => { counts[group.area] = (counts[group.area] || 0) + 1; });

  const dots = Object.entries(counts).map(([area, count]) => {
    const [x, y] = toMap(NEIGHBOURHOODS[area]);
    const kind = nearAreas.has(area) ? 'near' : 'far';
    const label = `${area}: ${count} ${count === 1 ? 'group' : 'groups'}`;
    return `<circle class="${kind}" cx="${x}" cy="${y}" r="${4 + count * 2}"><title>${escapeHtml(label)}</title></circle>`;
  });

  const [hx, hy] = toMap(NEIGHBOURHOODS[home]);
  mapEl.innerHTML = dots.join('') + `
    <circle class="home" cx="${hx}" cy="${hy}" r="11"></circle>
    <text x="${hx}" y="${hy - 15}" text-anchor="middle">You</text>`;
}

homeSelect.innerHTML = Object.keys(NEIGHBOURHOODS)
  .map(name => `<option${name === 'Kreuzberg' ? ' selected' : ''}>${name}</option>`)
  .join('');
homeSelect.addEventListener('change', render);

render();
