import React from 'react';

// Define the shape of the `apartment` object that will be passed as a prop.
// This interface specifies the expected properties of the `apartment` object.
interface Props {
  apartment: {
    title: string;        // Title of the apartment
    description: string;  // Description of the apartment
    price: number;        // Price of the apartment
    location: string;     // Location of the apartment
  };
}

// Define the `ApartmentDetail` component which is a functional component.
// It takes `Props` as its prop type, which includes the `apartment` object.
const ApartmentDetail: React.FC<Props> = ({ apartment }) => {
  return (
    <div>
      {/* Render the title of the apartment as a heading */}
      <h1>{apartment.title}</h1>
      
      {/* Render the description of the apartment */}
      <p>{apartment.description}</p>
      
      {/* Render the location of the apartment */}
      <p>{apartment.location}</p>
      
      {/* Render the price of the apartment, formatted as currency */}
      <p>${apartment.price}</p>
    </div>
  );
};

// Export the component as the default export of the module
export default ApartmentDetail;

