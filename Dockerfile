FROM --platform=linux/amd64 node:16-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache dumb-init

COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .
COPY --chown=node:node tsconfig.base.json tsconfig.base.json
COPY --chown=node:node src/ src/

RUN yarn install --production=false --frozen-lockfile --link-duplicates

RUN yarn build

USER node

CMD [ "dumb-init", "yarn", "start"]
