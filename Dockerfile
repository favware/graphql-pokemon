# LOGIN:  docker login
# BUILD:  docker build -t gcr.io/data-sunlight-146313/graphql-pokemon .
# RUN:    docker container run --name graphql-pokemon -d --expose 8080 -p 8080:8080 -it gcr.io/data-sunlight-146313/graphql-pokemon:latest
# DEPLOY: docker push gcr.io/data-sunlight-146313/graphql-pokemon
# DEPLOY: gcloud beta run deploy --image gcr.io/data-sunlight-146313/graphql-pokemon
# REMOVE: docker rmi -f gcr.io/data-sunlight-146313/graphql-pokemo

FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --no-bin-links --link-duplicates

COPY dist .

ENV PORT 8080

CMD ["yarn", "cloud:start"]