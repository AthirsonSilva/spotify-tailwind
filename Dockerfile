FROM node:17-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn 

RUN yarn build

CMD ["yarn", "start"]