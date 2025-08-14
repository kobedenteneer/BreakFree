import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CravingHelpScreen: React.FC = () => {
  const [breathingCount, setBreathingCount] = useState(0);
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  const startBreathing = () => {
    setIsBreathingActive(true);
    setBreathingCount(0);
    // Simuleer ademhalingsoefening
    const interval = setInterval(() => {
      setBreathingCount(prev => {
        if (prev >= 10) {
          setIsBreathingActive(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const stopBreathing = () => {
    setIsBreathingActive(false);
    setBreathingCount(0);
  };

  const distractions = [
    {
      title: 'Muziek Luisteren',
      description: 'Zet jejejej je favoriete muziek op en focus op de tekst',
    },
    {
      title: 'Korte Game',
      description: 'Speel een eenvoudig spelletje voor afleiding',
    },
    {
      title: 'Video Kijken',
      description: 'Kijk een korte, grappige video',
    },
    {
      title: 'Tekenen',
      description: 'Pak pen en papier en teken iets',
    },
    {
      title: 'Dansen',
      description: 'Zet muziek op en dans even',
    },
  ];

  const contactOptions = [
    {
      title: 'Bel een Vriend',
      description: 'Bel iemand die je vertrouwt',
    },
    {
      title: 'Chat met Buddy',
      description: 'Stuur een bericht naar je buddy',
    },
    {
      title: 'Crisis Hulp',
      description: 'Direct contact met professionele hulp',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Craving Hulp</Text>
        <Text style={styles.headerSubtitle}>
          Je bent sterker dan je craving. Hier zijn tools om je te helpen.
        </Text>
      </View>

      <View style={styles.content}>
        {/* Breathing Exercise */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ademhalingsoefening</Text>
          <Text style={styles.sectionDescription}>
            Focus op je ademhaling om je craving te verminderen
          </Text>
          
          <View style={styles.breathingContainer}>
            <View style={styles.breathingCircle}>
              <Text style={styles.breathingText}>
                {isBreathingActive ? 'Adem in...' : 'Start oefening'}
              </Text>
            </View>
            
            <Text style={styles.breathingCount}>
              {breathingCount}/10
            </Text>
            
            <View style={styles.breathingButtons}>
              {!isBreathingActive ? (
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={startBreathing}>
                  <Text style={styles.startButtonText}>Start Oefening</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.stopButton}
                  onPress={stopBreathing}>
                  <Text style={styles.stopButtonText}>Stop</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        {/* Distraction Techniques */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Afleiding</Text>
          <Text style={styles.sectionDescription}>
            Kies een activiteit om je gedachten af te leiden
          </Text>
          
          {distractions.map((distraction, index) => (
            <View key={index} style={styles.distractionCard}>
              <Text style={styles.distractionTitle}>{distraction.title}</Text>
              <Text style={styles.distractionDescription}>
                {distraction.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Contact Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.sectionDescription}>
            Neem contact op als je steun nodig hebt
          </Text>
          
          {contactOptions.map((contact, index) => (
            <View key={index} style={styles.contactCard}>
              <Text style={styles.contactTitle}>{contact.title}</Text>
              <Text style={styles.contactDescription}>
                {contact.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Emergency Button */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.emergencyButtonText}>NOODGEVAL</Text>
          </TouchableOpacity>
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
    backgroundColor: '#E91E63',
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
  breathingContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  breathingCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  breathingText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  breathingCount: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  breathingButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stopButton: {
    backgroundColor: '#F44336',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  stopButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  distractionCard: {
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
  distractionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  distractionDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  contactCard: {
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
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  contactDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  emergencyButton: {
    backgroundColor: '#F44336',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  emergencyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CravingHelpScreen; 