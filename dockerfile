FROM node:latest

WORKDIR /appid-openshift

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]