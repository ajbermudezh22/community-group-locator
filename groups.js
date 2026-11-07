// Example data. All names are made up. Only the neighbourhood is shown,
// the exact address is shared by the hosts after people get in touch.

// Approximate centre of each neighbourhood (latitude, longitude).
const NEIGHBOURHOODS = {
  'Charlottenburg': [52.516, 13.304],
  'Friedrichshain': [52.515, 13.454],
  'Hackescher Markt': [52.522, 13.402],
  'Kreuzberg': [52.497, 13.411],
  'Lichtenberg': [52.515, 13.499],
  'Mitte': [52.520, 13.405],
  'Moabit': [52.530, 13.342],
  'Neukölln': [52.481, 13.435],
  'Pankow': [52.569, 13.402],
  'Prenzlauer Berg': [52.539, 13.424],
  'Reinickendorf': [52.589, 13.326],
  'Schöneberg': [52.482, 13.355],
  'Spandau': [52.535, 13.200],
  'Steglitz': [52.457, 13.322],
  'Tempelhof': [52.466, 13.385],
  'Treptow': [52.488, 13.470],
  'Wedding': [52.550, 13.366]
};

// spots = free places. 0 means the group is full.
const GROUPS = [
  { hosts: 'Martins & Olga',  area: 'Mitte',            day: 'Tuesday',   time: '19:30', spots: 3, food: 'Bring a dish to share (vegetarian welcome)' },
  { hosts: 'Alberto & Daryl', area: 'Prenzlauer Berg',  day: 'Wednesday', time: '19:00', spots: 2, food: 'Bring a drink or a dessert' },
  { hosts: 'Chris & Giorgia', area: 'Reinickendorf',    day: 'Thursday',  time: '19:30', spots: 4, tag: 'Young adults', food: 'Bring a snack to share' },
  { hosts: 'Johnny & Liza',   area: 'Reinickendorf',    day: 'Sunday',    time: '18:00', spots: 0, tag: 'Young adults', food: 'Snacks provided, just bring a drink' },
  { hosts: 'Sebas & Louisa',  area: 'Hackescher Markt', day: 'Friday',    time: '19:00', spots: 5, tag: 'Young adults', food: 'Bring a main dish or a salad' },
  { hosts: 'Ale & Moritz',    area: 'Steglitz',         day: 'Saturday',  time: '10:00', spots: 3, tag: 'For families', food: 'Bring fruit or baked goods' },
  { hosts: 'Priya & Daniel',  area: 'Kreuzberg',        day: 'Tuesday',   time: '19:00', spots: 2, food: 'Bring a dish from your home country' },
  { hosts: 'Kwame & Sofia',   area: 'Neukölln',         day: 'Sunday',    time: '12:00', spots: 0, tag: 'For families', food: 'Dinner is provided, bring a dessert' },
  { hosts: 'Mateo & Hannah',  area: 'Friedrichshain',   day: 'Thursday',  time: '19:30', spots: 6, tag: 'Young adults', food: 'Bring a side dish (vegan options please)' },
  { hosts: 'Yuki & Thomas',   area: 'Charlottenburg',   day: 'Wednesday', time: '19:30', spots: 1, food: 'Bring a dish to share (no nuts, please)' },
  { hosts: 'Amara',           area: 'Wedding',          day: 'Monday',    time: '19:00', spots: 4, food: 'Coffee and tea provided, bring a cake' },
  { hosts: 'Luca & Inês',     area: 'Schöneberg',       day: 'Saturday',  time: '10:30', spots: 2, tag: 'For families', food: 'Bring a snack for the kids to share' },
  { hosts: 'Grace & Samuel',  area: 'Tempelhof',        day: 'Friday',    time: '19:30', spots: 0, food: 'Bring bread or cheese to share' },
  { hosts: 'Nadia & Omar',    area: 'Moabit',           day: 'Thursday',  time: '18:30', spots: 3, food: 'Snacks provided, nothing needed' },
  { hosts: 'Elena & James',   area: 'Pankow',           day: 'Sunday',    time: '17:00', spots: 5, tag: 'For families', food: 'Bring a salad or a vegetable dish' },
  { hosts: 'Diego & Mia',     area: 'Treptow',          day: 'Wednesday', time: '19:00', spots: 2, tag: 'Young adults', food: 'Bring a drink to share' },
  { hosts: 'Fatima & Leon',   area: 'Lichtenberg',      day: 'Tuesday',   time: '19:30', spots: 3, food: 'Brunch: bring something sweet or savoury' },
  { hosts: 'Olivia & Kenji',  area: 'Spandau',          day: 'Saturday',  time: '16:00', spots: 4, tag: 'For families', food: 'Bring a dish to share (halal welcome)' },
  { hosts: 'Ana & Tobi',      area: 'Kreuzberg',        day: 'Friday',    time: '19:00', spots: 0, tag: 'Young adults', food: 'Bring a dish to share (gluten-free options appreciated)' },
  { hosts: 'Marco & Aisha',   area: 'Mitte',            day: 'Sunday',    time: '11:30', spots: 2, tag: 'For families', food: 'Bring a dessert to share' }
];
