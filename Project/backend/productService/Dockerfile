#  Dockerfile for Node Express Backend (Product Service)

FROM node:16.17.0-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --verbose

# Copy app source code
COPY . .

# Exports
EXPOSE 8081

CMD ["npm","start"]