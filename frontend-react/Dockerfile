# syntax=docker/dockerfile:1

FROM node:22-alpine

WORKDIR /frontend-react

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]