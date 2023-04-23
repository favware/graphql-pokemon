# ================ #
#    Base Stage    #
# ================ #

FROM node:18-alpine as base

WORKDIR /usr/src/app

ENV HUSKY=0
ENV CI=true

RUN apk add --no-cache dumb-init

COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .yarn/ .yarn/

RUN sed -i 's/"postinstall": "husky install .github\/husky"/"postinstall": ""/' ./package.json

ENTRYPOINT ["dumb-init", "--"]

# ================ #
#   Builder Stage  #
# ================ #

FROM base as builder

ENV NODE_ENV="development"

COPY --chown=node:node tsconfig.base.json tsconfig.base.json
COPY --chown=node:node src/ src/

RUN yarn install --immutable
RUN yarn run build

# ================ #
#   Runner Stage   #
# ================ #

FROM base AS runner

ENV NODE_ENV="production"
ENV NODE_OPTIONS="--enable-source-maps"

COPY --chown=node:node --from=builder /usr/src/app/dist/index.mjs dist/index.mjs

RUN yarn workspaces focus --all --production

USER node

CMD [ "yarn", "run", "start"]
