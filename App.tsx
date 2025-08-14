import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import OnboardingScreen from './src/screens/OnboardingScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import CravingHelpScreen from './src/screens/CravingHelpScreen';
import EducationScreen from './src/screens/EducationScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import HelpScreen from './src/screens/HelpScreen';

// Components
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'CravingHulp') {
            iconName = 'emergency';
          } else if (route.name === 'Educatie') {
            iconName = 'school';
          } else if (route.name === 'Community') {
            iconName = 'people';
          } else if (route.name === 'Hulp') {
            iconName = 'help';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerShown: false,
      })}>
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen 
        name="CravingHulp" 
        component={CravingHelpScreen}
        options={{tabBarLabel: 'Craving Hulp'}}
      />
      <Tab.Screen 
        name="Educatie" 
        component={EducationScreen}
        options={{tabBarLabel: 'Educatie'}}
      />
      <Tab.Screen 
        name="Community" 
        component={CommunityScreen}
        options={{tabBarLabel: 'Community'}}
      />
      <Tab.Screen 
        name="Hulp" 
        component={HelpScreen}
        options={{tabBarLabel: 'Hulp'}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      setIsFirstLaunch(hasLaunched === null);
    } catch (error) {
      console.error('Error checking first launch:', error);
      setIsFirstLaunch(true);
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasLaunched', 'true');
      setIsFirstLaunch(false);
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  if (isFirstLaunch === null) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loadingText}>BreakFree laden...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isFirstLaunch ? (
            <Stack.Screen name="Onboarding">
              {props => (
                <OnboardingScreen {...props} onComplete={completeOnboarding} />
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Main" component={TabNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    fontSize: 18,
    color: '#4A90E2',
    fontWeight: '600',
  },
});

export default App; 