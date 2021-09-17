FROM node:alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

COPY ./public ./public

CMD ["npm", "run", "start"]