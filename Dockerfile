FROM node:16.19-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 8080

COPY . ./

CMD [ "npm", "run", "docs:dev"]
