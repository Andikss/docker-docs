# Use the official Node.js 17 Alpine Linux image as the base image
FROM node:17-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package.json .
COPY package-lock.json .

# Run the 'npm install' command inside the container to install dependencies
RUN npm install

# Inform Docker that the container will listen on port 4000 at runtime
EXPOSE 3000

# Specify the default command to run when the container starts
# This will start your Node.js application using the 'npm run dev' command
CMD ["npm", "run", "dev"]