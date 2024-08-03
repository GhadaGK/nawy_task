import express from 'express'; // Import the Express framework for creating the server
import mongoose from 'mongoose'; // Import Mongoose for MongoDB object modeling
import apartmentRoutes from './routes/apartment'; // Import the route definitions for apartments

// Create an Express application instance
const app = express();
// Define the port number for the server to listen on
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());
// Register the apartment routes under the /api endpoint
app.use('/api', apartmentRoutes);

// Connect to the MongoDB database using Mongoose
mongoose.connect('mongodb://mongo:27017/apartment-listing')
  .then(() => {
    // Log a message once connected to MongoDB
    console.log('Connected to MongoDB');
    // Start the Express server and listen for incoming requests on the specified port
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    // Log any errors that occur during the connection to MongoDB
    console.log(err);
  });


