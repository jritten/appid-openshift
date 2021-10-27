FROM node:latest

# set working directory
WORKDIR /appid-openshift

# install dependencies
COPY package.json ./
RUN npm install

# copy project
COPY . .

CMD ["npm", "start"]
