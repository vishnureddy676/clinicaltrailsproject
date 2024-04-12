# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Create directories for server and database
RUN mkdir -p server database

# Copy server and database directories
COPY server ./server
COPY database ./database

# Set the working directory to server
WORKDIR /usr/src/app/server

# Install npm dependencies for server
RUN npm install

# Set the working directory to database
WORKDIR /usr/src/app/database

# Install npm dependencies for database
RUN npm install

# Expose the port on which your app runs
EXPOSE 3000

# Set the working directory back to server
WORKDIR /usr/src/app/server

# Define the command to run your app
CMD ["npm", "start"]

# Define a default command to run for development
CMD ["npm", "run", "dev"]
