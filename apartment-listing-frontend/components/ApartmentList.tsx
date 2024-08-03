import React from 'react';
import Link from 'next/link';

// Define the structure of an apartment object
interface Apartment {
  _id: string;         // Unique identifier for the apartment
  title: string;       // Title of the apartment
  price: number;       // Price of the apartment
  location: string;    // Location of the apartment
}

// Define the props expected by the ApartmentList component
interface Props {
  apartments: Apartment[];  // Array of apartment objects to be displayed
}

// Functional component to display a list of apartments
const ApartmentList: React.FC<Props> = ({ apartments }) => {
  return (
    <div>
      {/* Iterate over the apartments array and render each apartment */}
      {apartments.map(apartment => (
        <div key={apartment._id}>
          {/* Link to the individual apartment detail page */}
          <Link href={`/apartment/${apartment._id}`}>
            <a>
              {/* Display the apartment's title */}
              <h2>{apartment.title}</h2>
              {/* Display the apartment's location */}
              <p>{apartment.location}</p>
              {/* Display the apartment's price */}
              <p>${apartment.price}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ApartmentList;


