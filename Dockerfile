FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --link-duplicates

COPY generated/api .

ENV PORT 8080

CMD ["yarn", "cloud:start"]