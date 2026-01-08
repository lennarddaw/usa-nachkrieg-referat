export const slidesData = [
  // ============================================================================
  // S0 - TITELFOLIE
  // ============================================================================
  {
    id: 'S0',
    type: 'title',
    title: 'Die USA als weltpolitischer Akteur',
    subtitle: 'nach dem Zweiten Weltkrieg (1945-1955)',
    authors: [],
    course: ''
  },

  // ============================================================================
  // S1 - AUSGANGSLAGE 1945 (M1: Truman Portrait)
  // ============================================================================
  {
    id: 'S1',
    type: 'image-with-text',
    materialLabel: 'M1',
    title: 'Ausgangslage 1945: Die USA als neue Supermacht',
    image: '/assets/M1_truman_1945.jpg',
    imageCaption: 'Harry S. Truman, US-Präsident 1945-1952',
    imageSource: 'Quelle: Buchner Kolleg Geschichte, S. 58, M1',
    content: [
      {
        subtitle: 'Militärische Dominanz',
        points: [
          'Größte Militärmacht der Welt',
          'Atomwaffenmonopol (bis 1949)',
          'Weltweite Militärbasen und Truppenstationierung'
        ]
      },
      {
        subtitle: 'Wirtschaftliche Stärke',
        points: [
          'Intakte Industrie im Gegensatz zu Europa',
          'Stärkste Wirtschaftsmacht global',
          'Massive Produktionskapazität'
        ]
      },
      {
        subtitle: 'Politischer Führungsanspruch',
        points: [
          'Mission: Demokratie und Marktwirtschaft verbreiten',
          'Moralische Legitimation als Siegermacht',
          'Hegemoniale Stellung im demokratischen Westen'
        ]
      }
    ],
    textSource: 'Quelle: Buchner Kolleg Geschichte, S. 58-59'
  },

  // ============================================================================
  // S3 - UNCLE SAM POSTER (M3: Bild)
  // ============================================================================
  {
    id: 'S3',
    type: 'image-with-text',
    materialLabel: 'M3',
    title: 'Das Selbstverständnis der USA',
    subtitle: 'Mission und moralischer Führungsanspruch',
    image: '/assets/M3_uncle_sam_1948.jpg',
    imageCaption: 'US-Rekrutierungsanzeige „I need you again", 1948',
    imageSource: 'Quelle: Buchner Kolleg Geschichte, S. 60, M3',
    content: [
      {
        subtitle: 'Kernbotschaft des Posters',
        points: [
          '„Your Army and Air Force serve the nation and mankind in war and peace"',
          'Militärdienst wird als Friedensmission legitimiert',
          'USA als Beschützer von Freiheit und Demokratie weltweit'
        ]
      },
      {
        subtitle: 'Ideologische Grundlagen',
        points: [
          'USA sehen sich als „Force for Peace"',
          'Moralische Überlegenheit gegenüber Totalitarismus',
          'Religiös geprägte Auserwähltheitsrhetorik',
          'Weltpolizist im Dienste der freien Welt'
        ]
      }
    ],
    textSource: 'Quelle: Buchner Kolleg Geschichte, S. 60'
  },

  // ============================================================================
  // S2 - UNO-GRÜNDUNG (M2: Text)
  // ============================================================================
  {
    id: 'S2',
    type: 'text-focus',
    materialLabel: 'M2',
    title: 'Die Gründung der Vereinten Nationen (UNO)',
    subtitle: '26. Juni 1945, San Francisco',
    mainText: `Die amerikanischen Ideale mit der Garantie der Menschenrechte zeigten sich auch bei Gründung der UNO im Jahr 1945. Gemäß der Charta der Vereinten Nationen verpflichten sich alle Mitglieder zur Sicherung des Weltfriedens, zum Schutz der Menschenrechte, zur Wahrung der Gleichberechtigung aller Völker und zur Verbesserung des Lebensstandards in der Welt.`,
    additionalImage: '/assets/UN-Charter_Unterzeichnung_1945.jpg',
    additionalImageCaption: 'Unterzeichnung der UN-Charta, San Francisco, 26. Juni 1945',
    sidePoints: [
      'USA übernahmen Führungsrolle bei UN-Gründung',
      'Sicherheitsrat mit permanenten Mitgliedern',
      'US-Vetorecht sichert Einfluss',
      'UN-Hauptsitz in New York'
    ],
    textSource: 'Quelle: Buchner Kolleg Geschichte, S. 58-59, M2'
  },

  // ============================================================================
  // S4 - TRUMAN UN-ZITAT (M4: Text)
  // ============================================================================
  {
    id: 'S4',
    type: 'text-focus',
    materialLabel: 'M4',
    title: 'US-Führungsanspruch in den Vereinten Nationen',
    subtitle: 'Truman zur Unterzeichnung der UN-Charta, 26. Juni 1945',
    mainText: `Es ist richtig, dass manche Staaten aus diesem Konflikt mächtig und gut ausgerüstet hervorgegangen sind; aber sie haben kein Recht zur Beherrschung der Welt. Es ist vielmehr die Pflicht dieser mächtigen Staaten, die verantwortliche Führung auf dem Wege zum Weltfrieden zu übernehmen. Darum haben wir hier beschlossen, dass Macht und Kraft nicht zur Kriegführung benutzt werden, sondern dazu dienen sollen, die Welt friedlich und frei von jeder Kriegsfurcht zu erhalten.`,
    additionalImage: '/assets/Truman_bei_UN-Rede.jpg',
    additionalImageCaption: 'Präsident Truman bei Rede vor dem US-Kongress',
    sidePoints: [
      'Unterscheidung: „Führung" vs. „Beherrschung"',
      'Legitimation durch Verantwortung statt Macht',
      'Macht als Mittel für Frieden, nicht Krieg',
      'USA als moralische Führungsmacht'
    ],
    textSource: 'Quelle: Buchner Kolleg Geschichte, S. 59, M4'
  },

  // ============================================================================
  // S5 - TRUMAN-DOKTRIN (M5: Text)
  // ============================================================================
  {
    id: 'S5',
    type: 'text-focus',
    materialLabel: 'M5',
    title: 'Die Truman-Doktrin',
    subtitle: 'Rede vor dem US-Kongress, 12. März 1947',
    mainText: `Im gegenwärtigen Zeitpunkt der Weltgeschichte muss fast jede Nation zwischen alternativen Lebensformen wählen. Nur allzu oft ist diese Wahl nicht frei. Die eine Lebensform gründet sich auf den Willen der Mehrheit und ist gekennzeichnet durch freie Institutionen, repräsentative Regierungsform, freie Wahlen, Garantien für die persönliche Freiheit, Rede- und Religionsfreiheit und Freiheit von politischer Unterdrückung. Die andere Lebensform gründet sich auf den Willen einer Minderheit, den diese der Mehrheit gewaltsam aufzwingt. Sie stützt sich auf Terror und Unterdrückung, auf die Zensur von Presse und Rundfunk, auf manipulierte Wahlen und auf die Unterdrückung persönlicher Freiheiten.`,
    additionalImage: '/assets/M7_bloc_map.jpg',
    additionalImageCaption: 'Karte: Militärische Blockbildung im Kalten Krieg',
    sidePoints: [
      'Zwei unvereinbare politische Systeme',
      'Freiheit und Demokratie vs. Terror und Unterdrückung',
      'Containment-Politik: Eindämmung des Kommunismus',
      'Wirtschaftlicher und militärischer Beistand für freie Völker'
    ],
    textSource: 'Quelle: Buchner Kolleg Geschichte, S. 60-61, M5'
  },

  // ============================================================================
  // S6 - MARSHALL-PLAN (M6: Text)
  // ============================================================================
  {
    id: 'S6',
    type: 'text-focus',
    materialLabel: 'M6',
    title: 'Der Marshall-Plan',
    subtitle: 'George C. Marshall an der Universität Harvard, 5. Juni 1947',
    mainText: `Unsere Politik richtet sich nicht gegen irgendein Land oder eine Anschauung, sondern gegen Hunger, Armut, Verzweiflung und Chaos. Ihr Ziel ist die Wiederbelebung einer leistungsfähigen Weltwirtschaft, die das Entstehen politischer und sozialer Zustände, in denen freiheitliche Einrichtungen gedeihen können, ermöglichen soll.`,
    additionalImage: '/assets/Marshall-Plan_Plakat.jpg',
    additionalImageCaption: 'Marshall-Plan Propaganda-Plakat „Freie Bahn dem Marshallplan"',
    sidePoints: [
      'European Recovery Program (ERP)',
      'Wiederaufbau Europas gegen Chaos und Extremismus',
      'Wirtschaftsstabilität → Politische Stabilität',
      'UdSSR verbot Satellitenstaaten die Teilnahme',
      'Vertiefung der europäischen Spaltung'
    ],
    textSource: 'Quelle: Buchner Kolleg Geschichte, S. 61, M6'
  },

  // ============================================================================
  // S7 - BLOCKBILDUNG (M7: Karte)
  // ============================================================================
  {
    id: 'S7',
    type: 'image-with-text',
    materialLabel: 'M7',
    title: 'Bipolare Weltordnung: Die militärische Blockbildung',
    subtitle: 'Ost-West-Konflikt 1945-1955',
    image: '/assets/M7_bloc_map.jpg',
    imageCaption: 'Karte: Militärische Blockbildung im Kalten Krieg',
    imageSource: 'Quelle: Buchner Kolleg Geschichte, S. 61, M7',
    content: [
      {
        subtitle: 'Westblock (USA)',
        points: [
          'NATO (1949): Nordatlantikpakt-Organisation',
          'Integration Westeuropas unter US-Führung',
          'Weltweite Stützpunkte und Bündnissysteme'
        ]
      },
      {
        subtitle: 'Ostblock (UdSSR)',
        points: [
          'Warschauer Pakt (1955) als Gegenbündnis',
          'Sowjetische Satellitenstaaten in Osteuropa',
          'Kommunistische Staaten in Asien'
        ]
      },
      {
        subtitle: 'Globale Dimension',
        points: [
          'Kalter Krieg wird weltweites System',
          'Stellvertreterkriege (Korea 1950-53)',
          'Permanente Abschreckung und Aufrüstung',
          'Bipolare Machtstruktur bis 1989'
        ]
      }
    ],
    textSource: 'Quelle: Buchner Kolleg Geschichte, S. 61'
  },
];