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
// ages = typical age range of the group (made up). languages = spoken in the group.
const GROUPS = [
  { hosts: 'Martins & Olga',  area: 'Mitte',            day: 'Tuesday',   time: '19:30', spots: 3, ages: '30–50', languages: ['English', 'Latvian'] },
  { hosts: 'Alberto & Daryl', area: 'Prenzlauer Berg',  day: 'Wednesday', time: '19:00', spots: 2, ages: '25–40', languages: ['English', 'Spanish'] },
  { hosts: 'Chris & Giorgia', area: 'Reinickendorf',    day: 'Thursday',  time: '19:30', spots: 4, ages: '18–30', languages: ['English', 'Italian'], tag: 'Young adults' },
  { hosts: 'Johnny & Liza',   area: 'Reinickendorf',    day: 'Sunday',    time: '18:00', spots: 0, ages: '18–30', languages: ['English', 'German'], tag: 'Young adults' },
  { hosts: 'Sebas & Louisa',  area: 'Hackescher Markt', day: 'Friday',    time: '19:00', spots: 5, ages: '18–30', languages: ['English', 'Spanish', 'German'], tag: 'Young adults' },
  { hosts: 'Ale & Moritz',    area: 'Steglitz',         day: 'Saturday',  time: '10:00', spots: 3, ages: '30–45', languages: ['German', 'English'], tag: 'For families' },
  { hosts: 'Priya & Daniel',  area: 'Kreuzberg',        day: 'Tuesday',   time: '19:00', spots: 2, ages: '25–45', languages: ['English', 'Hindi'] },
  { hosts: 'Kwame & Sofia',   area: 'Neukölln',         day: 'Sunday',    time: '12:00', spots: 0, ages: '30–45', languages: ['English', 'Portuguese'], tag: 'For families' },
  { hosts: 'Mateo & Hannah',  area: 'Friedrichshain',   day: 'Thursday',  time: '19:30', spots: 6, ages: '18–30', languages: ['English', 'Spanish'], tag: 'Young adults' },
  { hosts: 'Yuki & Thomas',   area: 'Charlottenburg',   day: 'Wednesday', time: '19:30', spots: 1, ages: '30–55', languages: ['English', 'Japanese', 'German'] },
  { hosts: 'Amara',           area: 'Wedding',          day: 'Monday',    time: '19:00', spots: 4, ages: '25–40', languages: ['English', 'French'] },
  { hosts: 'Luca & Inês',     area: 'Schöneberg',       day: 'Saturday',  time: '10:30', spots: 2, ages: '30–45', languages: ['English', 'Portuguese', 'Italian'], tag: 'For families' },
  { hosts: 'Grace & Samuel',  area: 'Tempelhof',        day: 'Friday',    time: '19:30', spots: 0, ages: '35–60', languages: ['English'] },
  { hosts: 'Nadia & Omar',    area: 'Moabit',           day: 'Thursday',  time: '18:30', spots: 3, ages: '25–45', languages: ['English', 'Arabic'] },
  { hosts: 'Elena & James',   area: 'Pankow',           day: 'Sunday',    time: '17:00', spots: 5, ages: '30–50', languages: ['English', 'Russian'], tag: 'For families' },
  { hosts: 'Diego & Mia',     area: 'Treptow',          day: 'Wednesday', time: '19:00', spots: 2, ages: '18–30', languages: ['Spanish', 'English'], tag: 'Young adults' },
  { hosts: 'Fatima & Leon',   area: 'Lichtenberg',      day: 'Tuesday',   time: '19:30', spots: 3, ages: '25–45', languages: ['German', 'English', 'Turkish'] },
  { hosts: 'Olivia & Kenji',  area: 'Spandau',          day: 'Saturday',  time: '16:00', spots: 4, ages: '30–45', languages: ['English', 'Japanese'], tag: 'For families' },
  { hosts: 'Ana & Tobi',      area: 'Kreuzberg',        day: 'Friday',    time: '19:00', spots: 0, ages: '18–30', languages: ['German', 'English'], tag: 'Young adults' },
  { hosts: 'Marco & Aisha',   area: 'Mitte',            day: 'Sunday',    time: '11:30', spots: 2, ages: '30–45', languages: ['English', 'Italian', 'Arabic'], tag: 'For families' }
];
