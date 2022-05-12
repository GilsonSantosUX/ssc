FROM node:alpine

WORKDIR /usr/client

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3002

CMD yarn start