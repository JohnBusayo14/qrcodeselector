// Central place for all the event content + QR code destinations.
// Point these two URLs at your live forms (Google Form, your registration
// app, etc.) and the QR codes update automatically.
export const QR_LINKS = {
  volunteer: 'https://register.gospelar.com/r/volunteer-registeration',
  registration: 'https://register.gospelar.com/r/holiday-bible-club-hbc-2',
};

export const EVENT = {
  parish: "RCCG Heaven's Gate Parish",
  department: 'Children Department',
  title: 'Holiday Bible Club (HBC)',
  tagline: 'Growing in faith, character, and community this July holiday.',
  intro:
    "The Holiday Bible Club (HBC) is organized by the RCCG Heaven's Gate Children's Department to nurture the spiritual, physical, social, and emotional development of children during the July long holiday break through Bible-based teaching, structured activities, and team engagement.",
  objective:
    "To provide a holistic Christian experience where children grow in their understanding of God's Word while building healthy relationships, developing character, and maintaining physical well-being through guided team activities.",
  overview: [
    { label: 'Duration', value: '4 Days (Tuesday – Friday)' },
    { label: 'Daily Time', value: '9:00 AM – 12:30 PM' },
    { label: 'Age Group', value: 'Children aged 6 – 13 years' },
  ],
  schedule: [
    { time: '9:00 – 9:15 AM', activity: 'Arrival & Registration', desc: 'Child tagging and verification of guardian documentation' },
    { time: '9:15 – 9:40 AM', activity: 'Morning Kick-off', desc: 'Opening prayer, light exercises, and worship songs' },
    { time: '9:40 – 10:00 AM', activity: 'Bible Study (Large Group)', desc: "Introduction of the day's theme and memory verse" },
    { time: '10:00 – 10:20 AM', activity: 'Age-Appropriate Breakouts', desc: 'In-depth discussion of the theme by age group' },
    { time: '10:20 – 10:45 AM', activity: 'Snack & Play Break', desc: 'Children eat snacks brought from home and socialize' },
    { time: '10:45 – 11:30 AM', activity: 'Games & Sports', desc: 'Indoor/outdoor team-based games' },
    { time: '11:30 – 12:00 PM', activity: 'Arts & Crafts', desc: 'Creative activities designed per age group' },
    { time: '12:00 – 12:30 PM', activity: 'Closing Session', desc: 'Memory verse revision, team score updates, and closing prayer' },
  ],
  scoring: [
    { name: 'Spirituality', desc: 'Memory verse retention, Bible study participation, and attentiveness' },
    { name: 'Sportsmanship', desc: 'Performance, teamwork, and conduct during games and sports' },
    { name: 'Character & Discipline', desc: 'Cleanliness after snack time, obedience, and overall behaviour' },
  ],
  teams: [
    'Publicity, Reception & Team Scoring',
    'Bible Study & Pastoral Team',
    'Games & Sports Team',
    'Arts & Crafts Team',
    'Housekeeping Team',
    'Media Team',
    'General Coordinators',
    'Prayer Team',
  ],
};
