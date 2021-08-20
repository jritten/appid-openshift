FROM node:latest

WORKDIR /os-appid

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]