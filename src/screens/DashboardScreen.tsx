import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DashboardScreen: React.FC = () => {
  const [daysClean, setDaysClean] = useState(0);
  const [moneySaved, setMoneySaved] = useState(0);
  const [currentMood, setCurrentMood] = useState('');

  const tips = [
    'Drink een glas water als je een craving hebt',
    'Bel een vriend of familielid voor steun',
    'Doe 10 diepe ademhalingen',
    'Ga even wandelen of sporten',
    'Luister naar je favoriete muziek',
  ];

  const motivationalQuotes = [
    'Elke dag is een nieuwe kans om sterker te worden.',
    'Jij bent sterker dan je verslaving.',
    'Kleine stappen leiden tot grote veranderingen.',
    'Vandaag is de dag om te beginnen.',
    'Je bent niet alleen in deze strijd.',
  ];

  useEffect(() => {
    setDaysClean(7);
    setMoneySaved(35);
  }, []);

  const getRandomTip = () => {
    return tips[Math.floor(Math.random() * tips.length)];
  };

  const getRandomQuote = () => {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BreakFree</Text>
        <Text style={styles.headerSubtitle}>Jouw reis naar vrijheid</Text>
      </View>

      <View style={styles.content}>
        {/* Progress Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jouw Voortgang</Text>
          <View style={styles.progressCards}>
            <View style={styles.progressCard}>
              <Text style={styles.progressNumber}>{daysClean}</Text>
              <Text style={styles.progressLabel}>Dagen Clean</Text>
            </View>
            <View style={styles.progressCard}>
              <Text style={styles.progressNumber}>€{moneySaved}</Text>
              <Text style={styles.progressLabel}>Bespaard</Text>
            </View>
          </View>
        </View>

        {/* Mood Tracker */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hoe voel je je vandaag?</Text>
          {!currentMood ? (
            <TouchableOpacity
              style={styles.moodButton}
              onPress={() => setCurrentMood('Goed')}>
              <Text style={styles.moodButtonText}>Check je mood</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.currentMood}>
              <Text style={styles.currentMoodText}>Je mood: {currentMood}</Text>
              <TouchableOpacity
                style={styles.changeMoodButton}
                onPress={() => setCurrentMood('')}>
                <Text style={styles.changeMoodText}>Wijzigen</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Daily Tip */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tip van de Dag</Text>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>{getRandomTip()}</Text>
          </View>
        </View>

        {/* Motivation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Motivatie</Text>
          <View style={styles.motivationCard}>
            <Text style={styles.motivationText}>{getRandomQuote()}</Text>
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
    backgroundColor: '#4A90E2',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#E8F4FD',
    textAlign: 'center',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  progressCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  progressNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10,
  },
  progressLabel: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  moodButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  moodButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  currentMood: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentMoodText: {
    fontSize: 16,
    color: '#333333',
  },
  changeMoodButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    padding: 8,
    paddingHorizontal: 12,
  },
  changeMoodText: {
    color: '#666666',
    fontSize: 14,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tipText: {
    fontSize: 16,
    color: '#333333',
  },
  motivationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  motivationText: {
    fontSize: 16,
    color: '#333333',
    fontStyle: 'italic',
  },
});

export default DashboardScreen; 