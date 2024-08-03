import express from 'express';  // Importing the Express module for creating the router
import { Apartment } from '../models/apartment';  // Importing the Apartment model from the models directory

// Create an instance of an Express router
const router = express.Router();

// Route handler for GET /apartments
router.get('/apartments', async (req, res) => {
  try {
    // Fetch all apartments from the database
    const apartments = await Apartment.find();
    // Send the list of apartments as JSON response
    res.json(apartments);
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).send('Server error');
  }
});

// Route handler for GET /apartments/:id
router.get('/apartments/:id', async (req, res) => {
  try {
    // Fetch a single apartment by its ID from the database
    const apartment = await Apartment.findById(req.params.id);
    if (apartment) {
      // Send the apartment details as JSON response
      res.json(apartment);
    } else {
      // Send a 404 error if the apartment is not found
      res.status(404).send('Apartment not found');
    }
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).send('Server error');
  }
});

// Route handler for POST /apartments
router.post('/apartments', async (req, res) => {
  try {
    // Create a new Apartment instance with the request body data
    const apartment = new Apartment(req.body);
    // Save the new apartment to the database
    await apartment.save();
    // Send the newly created apartment as JSON response with a 201 status code
    res.status(201).json(apartment);
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).send('Server error');
  }
});

// Export the router to be used in other parts of the application
export default router;

