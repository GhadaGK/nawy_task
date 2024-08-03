import 'react-native-gesture-handler'; // Import gesture handler to enable gesture support in React Native
import React from 'react'; // Import React to use JSX and create components
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer to manage navigation state
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator to create a stack-based navigation
import ApartmentListScreen from './src/screens/ApartmentListScreen'; // Import the screen component for listing apartments
import ApartmentDetailScreen from './src/screens/ApartmentDetailScreen'; // Import the screen component for apartment details

// Create a stack navigator
const Stack = createStackNavigator();

// Define the main App component
const App = () => {
  return (
    <NavigationContainer>
      {/* Set up stack navigation with two screens */}
      <Stack.Navigator initialRouteName="ApartmentList">
        {/* Screen for listing apartments */}
        <Stack.Screen 
          name="ApartmentList" // Name of the route
          component={ApartmentListScreen} // Component to render for this route
        />
        {/* Screen for displaying apartment details */}
        <Stack.Screen 
          name="ApartmentDetail" // Name of the route
          component={ApartmentDetailScreen} // Component to render for this route
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the App component as default export
export default App;


