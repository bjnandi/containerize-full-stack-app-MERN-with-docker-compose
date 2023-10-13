# Select a base image
FROM  node:20-alpine3.17

# Create a directory  and go to directory 
WORKDIR /app

# Copy the package.json file to my current directory for install necessary dependence  
COPY package.json .

# Install the dependence
RUN npm install

# Copy other file to my current directory
COPY . .


# Open the port for express server
EXPOSE 5000

# Run express rum in foreground
CMD ["npm", "start"]