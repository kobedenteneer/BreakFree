import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({onComplete}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    age: '',
    addictionType: '',
    currentUsage: '',
  });

  const addictionTypes = [
    'Roken',
    'Gamen',
    'Alcohol',
    'Drugs',
    'Social Media',
    'Gokken',
    'Anders',
  ];

  const usageLevels = [
    'Dagelijks',
    'Wekelijks',
    'Af en toe',
    'Al gestopt',
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeOnboarding = async () => {
    console.log('User data:', userData);
    onComplete();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Welkom bij BreakFree</Text>
            <Text style={styles.subtitle}>
              Samen gaan we jouw doel behalen. Deze app helpt je om vrij te worden van je verslaving.
            </Text>
            <Text style={styles.privacyText}>
              Je gegevens blijven anoniem en veilig. We delen niets zonder jouw toestemming.
            </Text>
          </View>
        );

      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Hoe oud ben je?</Text>
            <TextInput
              style={styles.input}
              placeholder="Voer je leeftijd in"
              value={userData.age}
              onChangeText={(text) => setUserData({...userData, age: text})}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Wat is je verslaving?</Text>
            <Text style={styles.subtitle}>Kies het type dat het beste bij je past:</Text>
            {addictionTypes.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  userData.addictionType === type && styles.selectedOption,
                ]}
                onPress={() => setUserData({...userData, addictionType: type})}>
                <Text
                  style={[
                    styles.optionText,
                    userData.addictionType === type && styles.selectedOptionText,
                  ]}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>Huidig gebruik</Text>
            <Text style={styles.subtitle}>Hoe vaak gebruik je momenteel?</Text>
            {usageLevels.map((level, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  userData.currentUsage === level && styles.selectedOption,
                ]}
                onPress={() => setUserData({...userData, currentUsage: level})}>
                <Text
                  style={[
                    styles.optionText,
                    userData.currentUsage === level && styles.selectedOptionText,
                  ]}>
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return userData.age.length > 0;
      case 2:
        return userData.addictionType.length > 0;
      case 3:
        return userData.currentUsage.length > 0;
      default:
        return true;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {renderStep()}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.progressContainer}>
          {[0, 1, 2, 3].map((step) => (
            <View
              key={step}
              style={[
                styles.progressDot,
                step <= currentStep && styles.progressDotActive,
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {currentStep > 0 && (
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Text style={styles.backButtonText}>Terug</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity
            style={[styles.nextButton, !canProceed() && styles.disabledButton]}
            onPress={handleNext}
            disabled={!canProceed()}>
            <Text style={styles.nextButtonText}>
              {currentStep === 3 ? 'Start' : 'Volgende'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  stepContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  privacyText: {
    fontSize: 14,
    color: '#E8F4FD',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#FFFFFF',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#4A90E2',
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 5,
  },
  progressDotActive: {
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    minWidth: 120,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  nextButtonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen; 