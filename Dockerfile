# LOGIN:           docker login
# BUILD:           docker build -t favware/graphql-pokemon:latest .
# RUN:             docker container run --expose 8080 -p 8080:8080 -it favware/graphql-pokemon:latest
# RUN DETACHED:    docker container run -d --expose 8080 -p 8080:8080 -it favware/graphql-pokemon:latest
# DEPLOY:          docker push favware/graphql-pokemon:latest
# REMOVE:          docker rmi -f favware/graphql-pokemon

FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY dist .

ENV PORT 8080

CMD ["yarn", "cloud:start"]