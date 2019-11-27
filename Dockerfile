FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "src/server.js" ]