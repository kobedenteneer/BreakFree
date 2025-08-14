# BreakFree - Verslaving Hulp App

Een React Native app die jongeren helpt met het overwinnen van verslavingen zoals roken, gamen, alcohol, drugs, social media en gokken.

## 🎯 Doel van de App

BreakFree is ontworpen om jongeren te ondersteunen in hun reis naar vrijheid van verslavingen. De app biedt:

- **Persoonlijke voortgang tracking**
- **Craving hulp met ademhalingsoefeningen**
- **Educatie over verslavingen**
- **Community support**
- **Professionele hulp connecties**

## 📱 Features

### 1. Onboarding
- Persoonlijke vragenlijst (leeftijd, verslaving type, gebruik)
- Privacy-uitleg en toestemming
- Persoonlijke setup

### 2. Dashboard
- Progress tracker (dagen clean, geld bespaard)
- Mood tracker
- Weekoverzicht grafiek
- Dagelijkse tips en motivatie

### 3. Craving Hulp
- Interactieve ademhalingsoefeningen
- Afleidingstechnieken
- Directe contact opties
- Noodknop voor crisis situaties

### 4. Educatie
- Informatie per verslaving type
- Effecten en risico's
- Gezonde alternatieven
- Interactieve quizzen

### 5. Community
- Anoniem forum
- Buddy matching systeem
- Success stories
- Peer support

### 6. Professionele Hulp
- Crisis contacten
- Links naar hulpinstanties
- Tips voor familie en vrienden
- Hulpbronnen

## 🚀 Installatie

### Vereisten
- Node.js (versie 14 of hoger)
- React Native CLI
- Android Studio (voor Android)
- Xcode (voor iOS, alleen op macOS)

### Stappen

1. **Clone de repository**
```bash
git clone <repository-url>
cd breakfree-app
```

2. **Installeer dependencies**
```bash
npm install
```

3. **iOS setup (alleen op macOS)**
```bash
cd ios
pod install
cd ..
```

4. **Start de app**

Voor Android:
```bash
npm run android
```

Voor iOS:
```bash
npm run ios
```

## 📁 Project Structuur

```
src/
├── screens/
│   ├── OnboardingScreen.tsx    # Welkomst en setup
│   ├── DashboardScreen.tsx     # Hoofddashboard
│   ├── CravingHelpScreen.tsx   # Craving hulp tools
│   ├── EducationScreen.tsx     # Educatie content
│   ├── CommunityScreen.tsx     # Forum en community
│   └── HelpScreen.tsx          # Professionele hulp
├── components/                 # Herbruikbare componenten
├── utils/                      # Helper functies
└── types/                      # TypeScript definities
```

## 🎨 Design Systeem

### Kleuren
- **Primair**: #4A90E2 (Blauw)
- **Secundair**: #E91E63 (Roze)
- **Succes**: #4CAF50 (Groen)
- **Waarschuwing**: #FF9800 (Oranje)
- **Gevaar**: #F44336 (Rood)

### Typografie
- **Headers**: 28px, Bold
- **Sectie titels**: 22px, Bold
- **Body tekst**: 16px, Regular
- **Kleine tekst**: 14px, Regular

## 🔧 Technische Details

### Gebruikte Libraries
- **React Navigation**: Navigatie tussen schermen
- **React Native Linear Gradient**: Gradient achtergronden
- **React Native Vector Icons**: Iconen
- **React Native Chart Kit**: Grafieken
- **React Native Async Storage**: Lokale data opslag
- **React Native Animated**: Animaties

### State Management
- React Hooks (useState, useEffect)
- AsyncStorage voor persistente data
- Lokale component state

## 📊 Data Opslag

De app slaat de volgende data lokaal op:
- Onboarding gegevens
- Voortgang data
- Mood tracking
- Gebruikersvoorkeuren

**Belangrijk**: Alle data wordt lokaal opgeslagen en wordt niet gedeeld zonder expliciete toestemming.

## 🧪 Testing

```bash
# Run tests
npm test

# Run linting
npm run lint
```

## 📱 Platform Ondersteuning

- **iOS**: 12.0+
- **Android**: API level 21+ (Android 5.0+)

## 🔒 Privacy & Veiligheid

- Alle data wordt lokaal opgeslagen
- Geen persoonlijke gegevens worden gedeeld
- Anonieme community interacties
- Veilige crisis contacten

## 🆘 Crisis Hulp

De app bevat directe links naar:
- **113 Zelfmoordpreventie**: 113
- **Korrelatie**: 0900-1450
- **De Kindertelefoon**: 0800-0432

## 🤝 Bijdragen

1. Fork de repository
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je wijzigingen (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📄 Licentie

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 🙏 Dankwoord

Deze app is ontwikkeld met steun van verslavingsdeskundigen en jongeren die hun ervaringen hebben gedeeld. Speciale dank aan alle testers en feedback gevers.

## 📞 Contact

Voor vragen of ondersteuning:
- Email: support@breakfree-app.nl
- Website: www.breakfree-app.nl

---

**Belangrijk**: Deze app is geen vervanging voor professionele hulp. Bij ernstige problemen, neem altijd contact op met een professional. 