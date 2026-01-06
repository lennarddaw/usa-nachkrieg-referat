export const slidesData = [
  // S0 - Titelfolie
  {
    id: 'S0',
    type: 'title',
    title: 'Die USA als weltpolitischer Akteur',
    subtitle: 'nach dem Zweiten Weltkrieg (1945-1955)',
    authors: ['Referent A', 'Referent B', 'Referent C'],
    course: 'Geschichte LK Q12'
  },

  // S1 - Material: Truman & UN-Gründung
  {
    id: 'S1',
    type: 'material-dual',
    title: 'Ausgangslage 1945',
    images: [
      {
        src: '/assets/M1_truman_1945.jpg',
        caption: 'Harry S. Truman, Präsident 1945-1952'
      },
      {
        src: '/assets/M2_un_charter_signing_1945.jpg',
        caption: 'UN-Charta-Unterzeichnung, San Francisco, 26. Juni 1945'
      }
    ],
    notes: [
      'USA als stärkste Militär- und Wirtschaftsmacht',
      'Führungsrolle bei UN-Gründung'
    ]
  },

  // S2 - Material: Uncle Sam Poster
  {
    id: 'S2',
    type: 'material',
    title: 'Selbstverständnis der USA',
    image: '/assets/M3_uncle_sam_1948.jpg',
    caption: 'US-Rekrutierungsanzeige „Uncle Sam needs you again", 1948',
    notes: [
      'Mission: Demokratie und Freiheit schützen',
      'Militärdienst als „Force for Peace"'
    ]
  },

  // S3 - Material: Truman UN-Zitat
  {
    id: 'S3',
    type: 'material',
    title: 'US-Führungsanspruch in der UNO',
    image: '/assets/M4_truman_un_quote.png',
    caption: 'Truman zur Unterzeichnung der UN-Charta, 26. Juni 1945',
    notes: [
      'Führung durch Verantwortung, nicht Herrschaft',
      'Sicherheitsrat mit Vetorecht'
    ]
  },

  // S4 - Material: Truman-Doktrin & Marshall-Plan
  {
    id: 'S4',
    type: 'material-dual',
    title: 'Containment-Politik',
    images: [
      {
        src: '/assets/M5_truman_doctrine_excerpt.png',
        caption: 'Truman-Doktrin, 12. März 1947'
      },
      {
        src: '/assets/M6_marshall_harvard_excerpt.png',
        caption: 'Marshall-Rede, Harvard, 5. Juni 1947'
      }
    ],
    notes: [
      'Eindämmung sowjetischer Expansion',
      'Wiederaufbau Europas für Stabilität'
    ]
  },

  // S5 - Material: Blockbildung Karte
  {
    id: 'S5',
    type: 'material',
    title: 'Bipolare Weltordnung',
    image: '/assets/M7_bloc_map.png',
    caption: 'Militärische Blockbildung im Ost-West-Konflikt',
    notes: [
      'NATO (1949) vs. Warschauer Pakt (1955)',
      'Kalter Krieg als globales System'
    ]
  },

  // S6 - Schlussfolie
  {
    id: 'S6',
    type: 'conclusion',
    title: 'Die USA als weltpolitischer Akteur',
    takeaway: 'Von der Siegermacht zur Führungsmacht der bipolaren Weltordnung'
  }
];