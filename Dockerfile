FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE 3069

CMD ["npm", "start"]