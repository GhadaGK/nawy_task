Apartment Listing Application
Overview
This document provides a detailed overview of the Apartment Listing Application, including its backend, frontend, and mobile components. The application is containerized using Docker and managed with Docker Compose.
Project Structure

nawy_task (project-root)/

├── apartment-listing-backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   ├── apartment.ts
│   │   ├── models/
│   │   │   ├── apartment.ts
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   ├── tsconfig.json
├── apartment-listing-frontend/
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── apartment/
│   │   │   ├── [id].tsx
│   ├── components/
│   │   ├── ApartmentList.tsx
│   │   ├── ApartmentDetail.tsx
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   ├── tsconfig.json
├── ApartmentListingMobile/
│   ├── src/
│   │   ├── screens/
│   │   │   ├── ApartmentListScreen.tsx
│   │   │   ├── ApartmentDetailScreen.tsx
│   ├── App.tsx
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
├── docker-compose.yml

The project consists of the following components:
Backend Application: Node.js with TypeScript
Frontend Application: Next.js
Mobile Application: React Native
Database: MongoDB
Containerization: Docker and Docker Compose
Backend Application (Node.js – TypeScript)
1. Project Structure
src/: Contains source files
index.ts: Main server file
routes/: Contains API route definitions
apartment.ts: Defines API routes for apartments
models/: Contains Mongoose schemas
apartment.ts: Defines the apartment schema
Dockerfile: Docker configuration file
docker-compose.yml: Docker Compose configuration file
package.json: Project dependencies and scripts
tsconfig.json: TypeScript configuration file
2. Dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npx", "ts-node", "src/index.ts"]
3. API Endpoints
GET /api/apartments
Description: Retrieve a list of all apartments.
Response: JSON array of apartment objects.
GET /api/apartments/:id
Description: Retrieve details of a specific apartment by ID.
Parameters: id (path parameter)
Response: JSON object with apartment details.
POST /api/apartments
Description: Add a new apartment.
Request Body: JSON object with apartment details.
Response: JSON object of the newly created apartment.
Frontend Application (Next.js)
1. Project Structure
pages/: Contains page components
index.tsx: Apartment listing page
apartment/[id].tsx: Apartment details page
components/: Contains reusable components
ApartmentList.tsx: Displays a list of apartments
ApartmentDetail.tsx: Displays details of a single apartment
Dockerfile: Docker configuration file
docker-compose.yml: Docker Compose configuration file
package.json: Project dependencies and scripts
tsconfig.json: TypeScript configuration file
2. Dockerfile

FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
3. Pages
pages/index.tsx
Description: Displays a list of apartments using the ApartmentList component.
Data Source: Fetches data from http://backend:3000/api/apartments.
pages/apartment/[id].tsx
Description: Displays details of a specific apartment using the ApartmentDetail component.
Data Source: Fetches data from http://backend:3000/api/apartments/:id.
Mobile Application (React Native)
1. Project Structure
src/screens/: Contains screen components
ApartmentListScreen.tsx: Displays a list of apartments
ApartmentDetailScreen.tsx: Displays details of a single apartment
App.tsx: Main entry point of the application
Dockerfile: Docker configuration file
package.json: Project dependencies and scripts
tsconfig.json: TypeScript configuration file
2. Dockerfile
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD ["npx", "react-native", "start"]
3. Screens
src/screens/ApartmentListScreen.tsx
Description: Displays a list of apartments and navigates to the detail screen on item press.
Data Source: Fetches data from http://backend:3000/api/apartments.
src/screens/ApartmentDetailScreen.tsx
Description: Displays details of a specific apartment.
Data Source: Fetches data from http://backend:3000/api/apartments/:id.
Running the Application
1. Build and Start with Docker Compose
From the root of nawy_task project directory, execute the following command:
sudo docker-compose up --build
This command will build and start all services defined in the docker-compose.yml file.
2. Accessing the Applications
Backend API: http://localhost:3000
Frontend Application: http://localhost:3001
Metro Bundler for React Native: http://localhost:8081
3. React Native Setup
React Native applications typically require a physical device or emulator for testing. Ensure the device or emulator is set up and connected to the Metro Bundler running on localhost:8081.

