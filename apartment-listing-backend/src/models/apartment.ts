// Import necessary functions from the mongoose library
import { Schema, model } from 'mongoose';

// Define the schema for the Apartment model
const apartmentSchema = new Schema({
  // Title of the apartment, must be a string and is required
  title: { 
    type: String, 
    required: true 
  },
  
  // Description of the apartment, must be a string and is required
  description: { 
    type: String, 
    required: true 
  },
  
  // Price of the apartment, must be a number and is required
  price: { 
    type: Number, 
    required: true 
  },
  
  // Location of the apartment, must be a string and is required
  location: { 
    type: String, 
    required: true 
  },
});

// Create and export the Apartment model based on the schema
export const Apartment = model('Apartment', apartmentSchema);

