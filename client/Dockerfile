# Stage-1 & spacify a name 'builder'
FROM  node:latest AS builder

# Create a directory  and go to directory 
WORKDIR /app

# Copy the package.json file to my current directory for install necessary dependence  
COPY package.json .

# Install the dependence
RUN npm install

# Copy other file to my current directory
COPY . .

# Build optimise static file
RUN npm run build

# Stage-2
FROM nginx:1.25.2-alpine-slim

# Copy static file to my nignx folder for serve static contain
COPY --from=builder /app/build /usr/share/nginx/html

# Open the port for react
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
