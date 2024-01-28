# ================ #
#    Base Stage    #
# ================ #

FROM oven/bun:alpine as base

ENV CI=true

RUN apk add --no-cache dumb-init

COPY --chown=bun:bun package.json .
COPY --chown=bun:bun bun.lockb .
COPY --chown=bun:bun graphql/ graphql/

RUN bun install --frozen-lockfile

ENTRYPOINT ["dumb-init", "--"]

# ================ #
#   Builder Stage  #
# ================ #

FROM base as builder

COPY --from=base --chown=bun:bun /home/bun/app/node_modules/ /home/bun/app/node_modules/

COPY --chown=bun:bun tsconfig.base.json tsconfig.base.json
COPY --chown=bun:bun tsup.config.ts tsup.config.ts
COPY --chown=bun:bun src/ src/
COPY --chown=bun:bun scripts/on-build-success.ts scripts/on-build-success.ts
COPY --chown=bun:bun scripts/tsconfig.json scripts/tsconfig.json

RUN bun build

# ================ #
#   Runner Stage   #
# ================ #

FROM base as runner

ENV NODE_ENV="production"

COPY --from=base --chown=bun:bun /home/bun/app/node_modules/ /home/bun/app/node_modules/
COPY --from=builder --chown=bun:bun /home/bun/app/api/ /home/bun/app/api/

USER node

CMD [ "bun", "run", "start"]
