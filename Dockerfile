# Use an official Node runtime as a parent image
FROM node:18.13.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the local code to the container
COPY . .

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 8080

# Define environment variable
ENV NODE_ENV=production

# Run the application
CMD ["yarn", "dev"]