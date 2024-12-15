import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// Home Screen Component
const HomeScreen = () => (
  <View style={styles.container}>
    <Text variant="headlineLarge" style={styles.title}>
      Welcome to Home
    </Text>
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="bodyMedium">This is the Home screen.</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={() => {}}>
          Learn More
        </Button>
      </Card.Actions>
    </Card>
  </View>
);

// Profile Screen Component
const ProfileScreen = () => (
  <View style={styles.container}>
    <Text variant="headlineLarge" style={styles.title}>
      Profile Screen
    </Text>
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="bodyMedium">Manage your profile here.</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="outlined" onPress={() => {}}>
          Edit Profile
        </Button>
      </Card.Actions>
    </Card>
  </View>
);

// Settings Screen Component
const SettingsScreen = () => (
  <View style={styles.container}>
    <Text variant="headlineLarge" style={styles.title}>
      Settings
    </Text>
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="bodyMedium">Configure your preferences.</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained-tonal" onPress={() => {}}>
          Save Settings
        </Button>
      </Card.Actions>
    </Card>
  </View>
);

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 16,
    color: '#333',
  },
  card: {
    width: '100%',
    marginTop: 16,
    padding: 8,
  },
});
