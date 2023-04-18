FROM node:18.14.0-alpine as base

RUN apk add g++ make python3

WORKDIR /app

#--------- Development -----------
FROM base as development

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
