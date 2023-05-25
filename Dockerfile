FROM node:18.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn 

RUN yarn build

EXPOSE ${PORT}

CMD ["yarn", "start"]