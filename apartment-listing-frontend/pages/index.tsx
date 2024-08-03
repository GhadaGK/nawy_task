import React from 'react'; // Import React library for building components
import ApartmentList from '../components/ApartmentList'; // Import the ApartmentList component

// Define the structure of an Apartment object
interface Apartment {
  _id: string; // Unique identifier for the apartment
  title: string; // Title or name of the apartment
  price: number; // Price of the apartment
  location: string; // Location of the apartment
}

// Define the structure of the props expected by the Home component
interface Props {
  apartments: Apartment[]; // Array of apartment objects
}

// Function to fetch apartment data from the backend and provide it as props
export async function getServerSideProps() {
  // Fetch the list of apartments from the API endpoint
  const res = await fetch('http://backend:3000/api/apartments');
  // Parse the response JSON into an array of Apartment objects
  const apartments: Apartment[] = await res.json();
  // Return the fetched apartments as props to be used by the component
  return { props: { apartments } };
}

// Define the Home component as a functional component
const Home: React.FC<Props> = ({ apartments }) => {
  return (
    <div>
      <h1>Apartment Listings</h1> {/* Header for the page */}
      <ApartmentList apartments={apartments} /> {/* Render the ApartmentList component with the fetched apartments */}
    </div>
  );
};

// Export the Home component as the default export
export default Home;


