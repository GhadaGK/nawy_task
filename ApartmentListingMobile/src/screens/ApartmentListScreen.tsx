import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define the structure of an Apartment object
interface Apartment {
  _id: string;         // Unique identifier for the apartment
  title: string;       // Title of the apartment
  price: number;       // Price of the apartment
  location: string;    // Location of the apartment
}

// Define the ApartmentListScreen component
const ApartmentListScreen: React.FC = () => {
  // State to hold the list of apartments
  const [apartments, setApartments] = useState<Apartment[]>([]);
  
  // Hook to access navigation functions
  const navigation = useNavigation();

  // Effect hook to fetch apartment data when the component mounts
  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://backend:3000/api/apartments')
      .then(res => res.json())  // Convert response to JSON
      .then(data => setApartments(data));  // Update state with fetched data
  }, []);

  return (
    // FlatList component to display the list of apartments
    <FlatList
      data={apartments}  // Data to be rendered
      keyExtractor={item => item._id}  // Unique key for each item
      renderItem={({ item }) => (
        // TouchableOpacity component to handle item press
        <TouchableOpacity
          style={styles.item}  // Apply styles to the item
          onPress={() => 
            // Navigate to the ApartmentDetail screen with the selected apartment ID
            navigation.navigate('ApartmentDetail', { id: item._id })
          }
        >
          {/* Display the title of the apartment */}
          <Text style={styles.title}>{item.title}</Text>
          {/* Display the location of the apartment */}
          <Text>{item.location}</Text>
          {/* Display the price of the apartment */}
          <Text>${item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  item: {
    padding: 20,  // Padding around the item
    borderBottomWidth: 1,  // Border width at the bottom
    borderBottomColor: '#ccc',  // Border color at the bottom
  },
  title: {
    fontSize: 18,  // Font size of the title
    fontWeight: 'bold',  // Font weight of the title
  },
});

export default ApartmentListScreen;  // Export the component for use in other parts of the app

