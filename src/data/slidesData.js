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

  // S1 - Ausgangslage mit Truman Portrait
  {
    id: 'S1',
    type: 'image-with-text',
    title: 'Ausgangslage 1945: Die USA als neue Supermacht',
    image: '/assets/M1_truman_1945.jpg',
    imageCaption: 'Harry S. Truman, US-Präsident 1945-1952',
    content: [
      {
        subtitle: 'Militärische Dominanz',
        points: [
          'Größte Militärmacht der Welt',
          'Atomwaffenmonopol (bis 1949)',
          'Weltweite Militärbasen'
        ]
      },
      {
        subtitle: 'Wirtschaftliche Stärke',
        points: [
          'Intakte Industrie',
          'Stärkste Wirtschaftsmacht',
          'Massive Produktionskapazität'
        ]
      },
      {
        subtitle: 'Politischer Führungsanspruch',
        points: [
          'Mission: Demokratie verbreiten',
          'Moralische Legitimation',
          'Hegemoniale Stellung'
        ]
      }
    ]
  },

  // S2 - UNO-Gründung mit Text
  {
    id: 'S2',
    type: 'text-focus',
    title: 'Die Gründung der Vereinten Nationen (UNO)',
    subtitle: '26. Juni 1945, San Francisco',
    mainText: `Die amerikanischen Ideale mit der Garantie der Menschenrechte zeigten sich auch bei Gründung der UNO im Jahr 1945. Gemäß der Charta der Vereinten Nationen verpflichten sich alle Mitglieder zur Sicherung des Weltfriedens, zum Schutz der Menschenrechte, zur Wahrung der Gleichberechtigung aller Völker und zur Verbesserung des Lebensstandards in der Welt.`,
    quote: {
      text: '„Wir haben gelernt, dass wir nicht alleine in Frieden leben können; dass unser eigenes Wohlergehen vom Wohlergehen anderer, weit entfernter Nationen abhängig ist."',
      author: 'Franklin D. Roosevelt, 20. Januar 1945'
    },
    sidePoints: [
      'USA übernahmen Führungsrolle',
      'Sicherheitsrat mit Vetorecht',
      'UN-Hauptsitz in New York',
      'Charta-Ziele: Weltfrieden'
    ]
  },

  // S3 - Uncle Sam Poster
  {
    id: 'S3',
    type: 'image-with-text',
    title: 'Das Selbstverständnis der USA',
    subtitle: 'Mission und moralischer Führungsanspruch',
    image: '/assets/M3_uncle_sam_1948.jpg',
    imageCaption: 'US-Rekrutierungsanzeige „I need you again", 1948',
    content: [
      {
        subtitle: 'Kernbotschaft',
        points: [
          'Militärdienst als Friedensmission',
          'USA als Beschützer der Freiheit',
          'Weltweite Verantwortung'
        ]
      },
      {
        subtitle: 'Ideologische Grundlagen',
        points: [
          'USA als „Force for Peace"',
          'Moralische Überlegenheit',
          'Religiös geprägte Rhetorik',
          'Weltpolizist im Dienste der Freiheit'
        ]
      }
    ]
  },

  // S4 - Truman UN-Zitat
  {
    id: 'S4',
    type: 'text-focus',
    title: 'US-Führungsanspruch in den Vereinten Nationen',
    subtitle: 'Truman zur Unterzeichnung der UN-Charta, 26. Juni 1945',
    mainText: `Es ist richtig, dass manche Staaten aus diesem Konflikt mächtig und gut ausgerüstet hervorgegangen sind; aber sie haben kein Recht zur Beherrschung der Welt. Es ist vielmehr die Pflicht dieser mächtigen Staaten, die verantwortliche Führung auf dem Wege zum Weltfrieden zu übernehmen. Darum haben wir hier beschlossen, dass Macht und Kraft nicht zur Kriegführung benutzt werden, sondern dazu dienen sollen, die Welt friedlich und frei von jeder Kriegsfurcht zu erhalten.`,
    quote: {
      text: 'Durch ihr eigenes Beispiel sollen die starken Nationen auf dem Wege zur internationalen Gerechtigkeit als Führer wirken.',
      author: 'Archiv der Gegenwart, 27. Juni 1945'
    },
    sidePoints: [
      '„Führung" vs. „Beherrschung"',
      'Legitimation durch Verantwortung',
      'Macht als Mittel für Frieden',
      'Moralische Führungsmacht'
    ]
  },

  // S5 - Truman-Doktrin
  {
    id: 'S5',
    type: 'text-focus',
    title: 'Die Truman-Doktrin',
    subtitle: 'Rede vor dem US-Kongress, 12. März 1947',
    mainText: `Im gegenwärtigen Zeitpunkt der Weltgeschichte muss fast jede Nation zwischen alternativen Lebensformen wählen. Die eine Lebensform gründet sich auf den Willen der Mehrheit und ist gekennzeichnet durch freie Institutionen, repräsentative Regierungsform, freie Wahlen, Garantien für die persönliche Freiheit, Rede- und Religionsfreiheit.`,
    secondaryText: `Die andere Lebensform gründet sich auf den Willen einer Minderheit, den diese der Mehrheit gewaltsam aufzwingt. Sie stützt sich auf Terror und Unterdrückung, auf die Zensur von Presse und Rundfunk und auf die Unterdrückung persönlicher Freiheiten.`,
    sidePoints: [
      'Zwei unvereinbare Systeme',
      'Freiheit vs. Unterdrückung',
      'Containment-Politik',
      'Beistand für freie Völker'
    ]
  },

  // S6 - Marshall-Plan
  {
    id: 'S6',
    type: 'text-focus',
    title: 'Der Marshall-Plan',
    subtitle: 'George C. Marshall an der Universität Harvard, 5. Juni 1947',
    mainText: `Unsere Politik richtet sich nicht gegen irgendein Land oder eine Anschauung, sondern gegen Hunger, Armut, Verzweiflung und Chaos. Ihr Ziel ist die Wiederbelebung einer leistungsfähigen Weltwirtschaft, die das Entstehen politischer und sozialer Zustände, in denen freiheitliche Einrichtungen gedeihen können, ermöglichen soll.`,
    quote: {
      text: 'Ich bin davon überzeugt, dass eine solche Hilfe nicht von Fall zu Fall gegeben werden sollte. Jede Hilfe sollte Heilung und nicht bloß Linderung bringen.',
      author: 'George C. Marshall, Harvard, 5. Juni 1947'
    },
    sidePoints: [
      'European Recovery Program',
      'Wiederaufbau gegen Chaos',
      'Wirtschaft → Politische Stabilität',
      'Vertiefung der Spaltung'
    ]
  },

  // S7 - Blockbildung Karte
  {
    id: 'S7',
    type: 'image-with-text',
    title: 'Bipolare Weltordnung: Die militärische Blockbildung',
    subtitle: 'Ost-West-Konflikt 1945-1955',
    image: '/assets/M7_bloc_map.jpg',
    imageCaption: 'Karte: Militärische Blockbildung im Kalten Krieg',
    content: [
      {
        subtitle: 'Westblock (USA)',
        points: [
          'NATO (1949)',
          'Integration Westeuropas',
          'Weltweite Stützpunkte'
        ]
      },
      {
        subtitle: 'Ostblock (UdSSR)',
        points: [
          'Warschauer Pakt (1955)',
          'Sowjetische Satellitenstaaten',
          'Kommunistische Staaten Asiens'
        ]
      },
      {
        subtitle: 'Globale Dimension',
        points: [
          'Kalter Krieg als globales System',
          'Stellvertreterkriege',
          'Permanente Abschreckung',
          'Bipolare Struktur bis 1989'
        ]
      }
    ]
  },

  // S8 - Schlussfolie
  {
    id: 'S8',
    type: 'conclusion',
    title: 'Die USA als weltpolitischer Akteur',
    subtitle: 'Von der Siegermacht zur Führungsmacht der bipolaren Weltordnung',
    keyPoints: [
      {
        title: 'Selbstverständnis',
        text: 'USA definierten sich als moralische Führungsmacht mit der Mission, Demokratie und Freiheit zu verteidigen'
      },
      {
        title: 'Institutionalisierung',
        text: 'UNO-Gründung sicherte US-Einfluss durch Sicherheitsrat und Vetorecht'
      },
      {
        title: 'Containment',
        text: 'Truman-Doktrin und Marshall-Plan als Instrumente gegen sowjetische Expansion'
      },
      {
        title: 'Blockbildung',
        text: 'NATO und Warschauer Pakt zementierten die bipolare Weltordnung des Kalten Krieges'
      }
    ]
  }
];