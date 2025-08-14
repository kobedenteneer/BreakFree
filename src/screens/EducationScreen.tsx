import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const EducationScreen: React.FC = () => {
  const [selectedAddiction, setSelectedAddiction] = useState('');

  const addictionTypes = [
    {
      id: 'roken',
      title: 'Roken',
      color: '#FF5722',
      description: 'Informatie over nicotine verslaving en stoppen met roken',
      effects: [
        'Longkanker en andere longziekten',
        'Hart- en vaatziekten',
        'Verminderde conditie',
        'Geldverspilling',
      ],
      alternatives: [
        'Nicotinepleisters of -kauwgom',
        'Ademhalingsoefeningen',
        'Sporten en bewegen',
        'Meditatie en mindfulness',
      ],






      
    },
    {
      id: 'gamen',
      title: 'Gamen',
      color: '#9C27B0',
      description: 'Over gameverslaving en gezonde gaming gewoonten',
      effects: [
        'Slaaptekort en vermoeidheid',
        'Sociale isolatie',
        'Slechte schoolprestaties',
        'Fysieke inactiviteit',
      ],
      alternatives: [
        'Tijdslimieten instellen',
        'Buitenspelen en sporten',
        'Sociale activiteiten',
        'Creatieve hobby\'s',
      ],
    },
    {
      id: 'alcohol',
      title: 'Alcohol',
      color: '#FF9800',
      description: 'Over alcoholverslaving en verantwoord drinken',
      effects: [
        'Leverziekten',
        'Hersenschade',
        'Verslechterde relaties',
        'Financiële problemen',
      ],
      alternatives: [
        'Alcoholvrije dranken',
        'Sociale activiteiten zonder alcohol',
        'Sport en beweging',
        'Therapie en counseling',
      ],
    },
    {
      id: 'social-media',
      title: 'Social Media',
      color: '#2196F3',
      description: 'Over social media verslaving en digitale balans',
      effects: [
        'Verminderde concentratie',
        'Slaapproblemen',
        'Vergelijking met anderen',
        'Verminderde sociale vaardigheden',
      ],
      alternatives: [
        'App limieten instellen',
        'Offline activiteiten',
        'Echte sociale contacten',
        'Mindfulness en meditatie',
      ],
    },
  ];

  const handleAddictionSelect = (addiction: any) => {
    setSelectedAddiction(addiction.id);
  };

  const renderAddictionDetails = () => {
    if (!selectedAddiction) return null;

    const addiction = addictionTypes.find(a => a.id === selectedAddiction);
    if (!addiction) return null;

    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>{addiction.title} - Details</Text>
        
        {/* Effects */}
        <View style={styles.detailSection}>
          <Text style={styles.detailSectionTitle}>Effecten</Text>
          {addiction.effects.map((effect, index) => (
            <View key={index} style={styles.effectItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.effectText}>{effect}</Text>
            </View>
          ))}
        </View>

        {/* Alternatives */}
        <View style={styles.detailSection}>
          <Text style={styles.detailSectionTitle}>Gezonde Alternatieven</Text>
          {addiction.alternatives.map((alternative, index) => (
            <View key={index} style={styles.effectItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.effectText}>{alternative}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Educatie</Text>
        <Text style={styles.headerSubtitle}>
          Leer meer over verslavingen en hoe je ermee om kunt gaan
        </Text>
      </View>

      <View style={styles.content}>
        {/* Addiction Types */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soorten Verslavingen</Text>
          <Text style={styles.sectionDescription}>
            Kies een verslaving om meer te leren
          </Text>
          
          {addictionTypes.map((addiction) => (
            <TouchableOpacity
              key={addiction.id}
              style={[
                styles.addictionCard,
                selectedAddiction === addiction.id && styles.selectedCard,
              ]}
              onPress={() => handleAddictionSelect(addiction)}>
              <View style={styles.addictionContent}>
                <Text style={styles.addictionTitle}>{addiction.title}</Text>
                <Text style={styles.addictionDescription}>
                  {addiction.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Selected Addiction Details */}
        {renderAddictionDetails()}

        {/* General Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Algemene Tips</Text>
          <View style={styles.tipsContainer}>
            <View style={styles.tipCard}>
              <Text style={styles.tipTitle}>Herken Triggers</Text>
              <Text style={styles.tipDescription}>
                Leer wat jouw triggers zijn en hoe je ermee om kunt gaan
              </Text>
            </View>
            
            <View style={styles.tipCard}>
              <Text style={styles.tipTitle}>Zoek Steun</Text>
              <Text style={styles.tipDescription}>
                Praat met vrienden, familie of professionals over je struggles
              </Text>
            </View>
            
            <View style={styles.tipCard}>
              <Text style={styles.tipTitle}>Blijf Actief</Text>
              <Text style={styles.tipDescription}>
                Sport en beweging helpen bij het verminderen van cravings
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  addictionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  addictionContent: {
    flex: 1,
  },
  addictionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  addictionDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailSection: {
    marginBottom: 20,
  },
  detailSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  effectItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#4A90E2',
    marginRight: 10,
    marginTop: 2,
  },
  effectText: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
    lineHeight: 20,
  },
  tipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10,
    textAlign: 'center',
  },
  tipDescription: {
    fontSize: 12,
    color: '#666666',
    marginTop: 5,
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default EducationScreen; 