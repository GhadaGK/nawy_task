import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

// Define the type for route parameters
type RootStackParamList = {
  ApartmentDetail: { id: string }; // Expecting an 'id' parameter for the ApartmentDetail screen
};

// Define the type for route properties specific to the 'ApartmentDetail' route
type ApartmentDetailScreenRouteProp = RouteProp<RootStackParamList, 'ApartmentDetail'>;

const ApartmentDetailScreen: React.FC = () => {
  // Access route parameters using useRoute hook
  const route = useRoute<ApartmentDetailScreenRouteProp>();
  const { id } = route.params; // Extract 'id' from route parameters
  const [apartment, setApartment] = useState<any>(null); // State to store apartment details

  // Fetch apartment details when the component mounts or 'id' changes
  useEffect(() => {
    fetch(`http://backend:3000/api/apartments/${id}`)
      .then(res => res.json()) // Parse the JSON response
      .then(data => setApartment(data)); // Update state with fetched data
  }, [id]);

  // Render a loading message if apartment details are not yet available
  if (!apartment) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Render apartment details once data is available
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{apartment.title}</Text> // Display apartment title
      <Text style={styles.description}>{apartment.description}</Text> // Display apartment description
      <Text style={styles.location}>{apartment.location}</Text> // Display apartment location
      <Text style={styles.price}>${apartment.price}</Text> // Display apartment price
    </View>
  );
};

// Define styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    padding: 20, // Add padding around the content
  },
  title: {
    fontSize: 24, // Set font size for title
    fontWeight: 'bold', // Make the title bold
  },
  description: {
    fontSize: 16, // Set font size for description
    marginVertical: 10, // Add vertical margin
  },
  location: {
    fontSize: 16, // Set font size for location
    marginVertical: 10, // Add vertical margin
  },
  price: {
    fontSize: 18, // Set font size for price
    fontWeight: 'bold', // Make the price bold
    marginVertical: 10, // Add vertical margin
  },
});

export default ApartmentDetailScreen;

