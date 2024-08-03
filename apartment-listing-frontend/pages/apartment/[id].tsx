import React from 'react';
import { GetServerSideProps } from 'next';
import ApartmentDetail from '../../components/ApartmentDetail';

// Define the shape of the apartment data
interface Apartment {
  title: string;        // Title of the apartment
  description: string;  // Description of the apartment
  price: number;        // Price of the apartment
  location: string;     // Location of the apartment
}

// Define the props that the ApartmentPage component will receive
interface Props {
  apartment: Apartment; // Apartment object passed as a prop
}

// Functional component that renders the apartment details page
const ApartmentPage: React.FC<Props> = ({ apartment }) => {
  return (
    <div>
      {/* Render the ApartmentDetail component, passing the apartment data as a prop */}
      <ApartmentDetail apartment={apartment} />
    </div>
  );
};

// Server-side function to fetch apartment data based on the ID from the URL
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  
  // Check if params and params.id exist and are valid
  if (!params || typeof params.id !== 'string') {
    return { notFound: true }; // Return a 404 page if ID is invalid
  }

  // Fetch apartment details from the backend API using the provided ID
  const res = await fetch(`http://backend:3000/api/apartments/${params.id}`);
  const apartment = await res.json(); // Parse the JSON response

  // Return the fetched apartment data as props
  return { props: { apartment } };
};

export default ApartmentPage; // Export the ApartmentPage component as the default export


