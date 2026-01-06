# USA als weltpolitischer Akteur nach dem Zweiten Weltkrieg

Minimalistische React-Präsentation für Geschichtsreferat (20 Min)

## 📋 Struktur

**7 Slides:**
- S0: Titelfolie
- S1: Truman & UN-Gründung (M1, M2)
- S2: Uncle Sam Poster (M3)
- S3: Truman UN-Zitat (M4)
- S4: Containment - Truman & Marshall (M5, M6)
- S5: Blockbildung Karte (M7)
- S6: Schlussfolie

## 🚀 Setup

### 1. Dependencies installieren
```bash
npm install
```

### 2. Materialbilder einfügen
Kopiere M1-M7 nach `public/assets/`:
- M1_truman_1945.jpg
- M2_un_charter_signing_1945.jpg
- M3_uncle_sam_1948.jpg
- M4_truman_un_quote.png
- M5_truman_doctrine_excerpt.png
- M6_marshall_harvard_excerpt.png
- M7_bloc_map.png

### 3. Dev Server starten
```bash
npm run dev
```

### 4. Build für Deployment
```bash
npm run build
```

## ⌨️ Navigation

- **→** oder **Rechts-Pfeil**: Nächste Slide
- **←** oder **Links-Pfeil**: Vorherige Slide
- **Buttons**: Unten in der Mitte

## 🎨 Design

- **Primary Color**: Dunkles Blau (#1e3a8a)
- **Accent Color**: Gold (#d97706)
- **Background**: Sanfter Grau-Gradient
- **Typografie**: System Fonts für optimale Performance

## 📁 Dateien

```
src/
├── components/
│   ├── Navigation.jsx     # Prev/Next + Keyboard
│   ├── ProgressBar.jsx    # Fortschrittsbalken
│   └── Slide.jsx          # Universal Slide Component
├── data/
│   └── slidesData.js      # Alle 7 Slides
├── App.jsx                # State Management
├── index.css              # Tailwind + Custom Styles
└── main.jsx               # React Entry
```

## 🎯 Features

- ✅ Minimalistisches Design
- ✅ Material-fokussiert (Bilder im Zentrum)
- ✅ Keyboard-Navigation
- ✅ Fortschrittsanzeige
- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Smooth Transitions
- ✅ Offline-fähig

## 📦 Technologien

- React 18
- Vite 6
- Tailwind CSS 3
- ES Modules