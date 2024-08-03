# Use the official Node.js image with version 18 as the base image
FROM node:18

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
# These files contain the list of dependencies for the project
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose port 8081 to allow communication with the outside world
# This is the default port used by the React Native Metro Bundler
EXPOSE 8081

# Command to start the Metro Bundler using React Native CLI
# This will start the development server for the React Native application
CMD ["npx", "react-native", "start"]

