FROM node:lts

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

CMD yarn start
