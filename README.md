# Kapsalon Ayso Website

Een moderne, responsive website voor Kapsalon Ayso in Leuven, gebouwd met Vite + TypeScript + React.

## 🚀 Features

- **Moderne Stack**: Vite + TypeScript + React
- **Responsive Design**: Optimized voor desktop en mobiel
- **SEO Geoptimaliseerd**: Meta tags, alt-teksten, en semantische HTML
- **Smooth Scrolling**: Navigatie tussen secties
- **Call-to-Action**: Prominente telefoonnummer en routebeschrijving
- **Interactieve Kaart**: Google Maps integratie
- **Contact Formulier**: Voor vragen en afspraken

## 📁 Project Structuur

```
kapper-ayso-website/
├── src/
│   ├── components/          # React componenten
│   │   ├── Header.tsx      # Navigatie header
│   │   ├── Hero.tsx        # Hero sectie met CTA
│   │   ├── About.tsx       # Over ons sectie
│   │   ├── Services.tsx    # Diensten & tarieven
│   │   ├── Contact.tsx     # Contact & locatie
│   │   └── Footer.tsx      # Footer
│   ├── styles/
│   │   └── index.css       # Globale CSS styles
│   ├── assets/
│   │   └── images/         # Website afbeeldingen
│   ├── App.tsx             # Hoofdcomponent
│   └── main.tsx            # Entry point
├── public/                 # Statische bestanden
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuratie
└── tsconfig.json           # TypeScript configuratie
```

## 🛠️ Installatie & Setup

### Vereisten
- Node.js (versie 16 of hoger)
- npm of yarn

### Installatie

1. **Clone of download het project**
   ```bash
   cd kapper-ayso-website
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open je browser**
   - De website opent automatisch op `http://localhost:3000`
   - Of ga handmatig naar de URL

### Build voor Productie

```bash
npm run build
```

De gebouwde bestanden worden opgeslagen in de `dist/` folder.

### Preview Productie Build

```bash
npm run preview
```

## 📱 Responsive Design

De website is volledig responsive en geoptimaliseerd voor:
- **Desktop**: 1200px+ (volledige layout)
- **Tablet**: 768px - 1199px (aangepaste grid)
- **Mobile**: < 768px (single column layout)

## 🎨 Styling & Theming

- **CSS Variables**: Voor consistente kleuren en spacing
- **Modern CSS**: Flexbox, Grid, en CSS-in-JS styling
- **Smooth Animations**: Fade-in effecten en hover states
- **Professional Colors**: Warme, uitnodigende kleuren voor kapsalon

## 📞 Call-to-Action Features

- **Prominente Telefoonnummer**: `+32 487 36 66 79`
- **Routebeschrijving**: Directe links naar Google Maps
- **Contact Formulier**: Voor vragen en afspraken
- **Openingstijden**: Duidelijk zichtbaar

## 🗺️ Kaart Integratie

- **Google Maps Embed**: Toont locatie in Leuven
- **Routebeschrijving**: Directe navigatie naar de salon
- **Locatie Info**: Parkeren, openbaar vervoer, wandelafstand

## 🔧 Customization

### Kleuren Aanpassen
Bewerk de CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #8B4513;    /* Hoofdkleur */
  --secondary-color: #D2691E;  /* Accent kleur */
  --accent-color: #F4A460;     /* Highlight kleur */
}
```

### Content Aanpassen
- **Telefoonnummer**: Zoek en vervang `+32 487 36 66 79`
- **Email**: Zoek en vervang `info@kapsalonayso.be`
- **Adres**: Pas locatie aan in Contact component
- **Tarieven**: Bewerk Services component

### Afbeeldingen Toevoegen
1. Plaats nieuwe afbeeldingen in `src/assets/images/`
2. Importeer in componenten: `import imageName from '../assets/images/imageName.jpg'`
3. Gebruik in JSX: `<img src={imageName} alt="Beschrijving" />`

## 📈 SEO Optimalisatie

- **Meta Tags**: Title, description, keywords
- **Semantische HTML**: Proper heading structure
- **Alt Teksten**: Voor alle afbeeldingen
- **Structured Data**: Voor betere zoekresultaten

## 🚀 Deployment

### Netlify
1. Build het project: `npm run build`
2. Upload `dist/` folder naar Netlify
3. Configureer custom domain

### Vercel
1. Connect GitHub repository
2. Vercel detecteert automatisch Vite project
3. Deploy met één klik

### Traditional Hosting
1. Build: `npm run build`
2. Upload `dist/` contents naar web server
3. Configureer server voor SPA routing

## 📋 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Support

Voor vragen of problemen:
- **Email**: info@kapsalonayso.be
- **Telefoon**: +32 487 36 66 79

## 📄 Licentie

© 2024 Kapsalon Ayso. Alle rechten voorbehouden.

---

**Gemaakt met ❤️ voor Kapsalon Ayso**
