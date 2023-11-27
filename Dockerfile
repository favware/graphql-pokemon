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
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .yarn/ .yarn/
COPY --chown=node:node graphql/ graphql/

RUN yarn install --immutable

ENTRYPOINT ["dumb-init", "--"]

# ================ #
#   Builder Stage  #
# ================ #

FROM base as builder

COPY --from=base --chown=node:node /usr/src/app/node_modules/ /usr/src/app/node_modules/

COPY --chown=node:node tsconfig.base.json tsconfig.base.json
COPY --chown=node:node tsup.config.ts tsup.config.ts
COPY --chown=node:node src/ src/
COPY --chown=node:node scripts/on-build-success.ts scripts/on-build-success.ts
COPY --chown=node:node scripts/data-gen-scripts/tsconfig.json scripts/data-gen-scripts/tsconfig.json

RUN yarn build

# ================ #
#   Runner Stage   #
# ================ #

FROM base as runner

ENV NODE_ENV="production"
ENV NODE_OPTIONS="--enable-source-maps"

COPY --from=base --chown=node:node /usr/src/app/node_modules/ /usr/src/app/node_modules/
COPY --from=builder --chown=node:node /usr/src/app/api/ /usr/src/app/api/

USER node

CMD [ "yarn", "run", "start"]
