# LOGIN:  docker login
# BUILD:  docker build . --tag gcr.io/favware-graphql/graphql-pokemon
# RUN:    docker container run -d --expose 8080 -p 8080:8080 -it gcr.io/favware-graphql/graphql-pokemon:latest
# DEPLOY: docker push gcr.io/favware-graphql/graphql-pokemon
# DEPLOY: gcloud beta run deploy --image gcr.io/favware-graphql/graphql-pokemon
# REMOVE: docker rmi -f favware/graphql-pokemon

FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY dist .

ENV PORT 8080

CMD ["yarn", "cloud:start"]