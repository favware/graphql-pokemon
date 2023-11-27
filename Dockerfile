# ================ #
#    Base Stage    #
# ================ #

FROM node:20-alpine as base

WORKDIR /usr/src/app

ENV YARN_DISABLE_GIT_HOOKS=1
ENV CI=true

RUN apk add --no-cache dumb-init

COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .
COPY --chown=node:node tsconfig.base.json tsconfig.base.json
COPY --chown=node:node tsup.config.ts tsup.config.ts
COPY --chown=node:node src/ src/
COPY --chown=node:node graphql/ graphql/
COPY --chown=node:node scripts/on-build-success.ts scripts/on-build-success.ts
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .yarn/ .yarn/

ENTRYPOINT ["dumb-init", "--"]

# ================ #
#   Runner Stage   #
# ================ #

FROM base as runner

ENV NODE_ENV="production"
ENV NODE_OPTIONS="--enable-source-maps"

RUN yarn install --immutable

RUN yarn build

USER node

CMD [ "yarn", "run", "start"]
