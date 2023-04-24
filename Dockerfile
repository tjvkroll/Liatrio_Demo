
FROM node:18

WORKDIR /usr/src/app

COPY package*.json Demo.js ./

RUN npm install

EXPOSE 80


CMD ["node", "Demo.js"]


