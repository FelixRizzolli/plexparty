# Use the official Node.js image as the base image
FROM node:20.18.0
LABEL author="felixrizzolli"

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run compile

# Expose the port the app runs on
EXPOSE 4000

# Start the application
CMD ["npm", "start"]