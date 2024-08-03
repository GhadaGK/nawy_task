# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if present) from the host to the working directory in the container
COPY package*.json ./

# Install the project dependencies specified in package.json
RUN npm install

# Copy the rest of the application code from the host to the working directory in the container
COPY . .

# Set the default command to run the TypeScript application using ts-node when the container starts
CMD ["npx", "ts-node", "src/index.ts"]


