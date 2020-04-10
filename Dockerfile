FROM node:10-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --only=production
COPY . /app
CMD node index.js
EXPOSE 3000