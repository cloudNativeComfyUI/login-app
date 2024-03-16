# Use the official Node.js 14 image.
FROM node:14

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from login-app
COPY package*.json .

# Install dependencies.
RUN npm install

# Copy the login-app folder.
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application.
CMD [ "npm", "start" ]