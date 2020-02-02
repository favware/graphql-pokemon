#!/usr/bin/env bash

RED='\033[0;31m'
LIGHTRED='\033[1;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
DARKGRAY='\033[1;30m'
YELLOW='\033[1;33m'
LIGHTBLUE='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
NC='\033[0m' # No Color

fancylog() {
  printf "$1 \n"
}

function help() {
  fancylog "${RED}All in One script for AIR projects.

${YELLOW}
Usage:
    scripts/docker.sh [COMMAND] [SUBCOMMAND]
    scripts/docker.sh -h | --help

${GREEN}
Options:
    -h, --help          You're looking at it

${LIGHTBLUE}
Commands:
    gcloud   Accesses the GCloud section of commands
    hub      Accesses the Dockerhub section of commands

${LIGHTPURPLE}
Subcommands:
    all      Runs build, push and deploy sequentially
    build    Builds the docker image
    run      Runs the docker image as container in detached state
    push     Pushes the docker image to the repository
    deploy   Gcloud only: Deploys the pushed docker image to Google Cloud Functions
    remove   Removes the Docker image
"
}

gcloudDocker() {
  case $1 in
  all) gcloudDocker build && gcloudDocker push && gcloudDocker deploy ;;
  build) docker build -t gcr.io/data-sunlight-146313/graphql-pokemon . ;;
  run) docker container run --name graphql-pokemon -d --expose 8080 -p 4000:8080 -it gcr.io/data-sunlight-146313/graphql-pokemon:latest ;;
  push) docker push gcr.io/data-sunlight-146313/graphql-pokemon ;;
  deploy) gcloud run deploy graphql-pokemon --image gcr.io/data-sunlight-146313/graphql-pokemon ;;
  remove) docker rmi -f gcr.io/data-sunlight-146313/graphql-pokemon ;;
  esac
}

hubDocker() {
  case $1 in
  all) hubDocker build && hubDocker push ;;
  build) docker build -t favware/graphql-pokemon . ;;
  run) docker container run --name graphql-pokemon -d --expose 8080 -p 4000:8080 -it favware/graphql-pokemon:latest ;;
  push) docker push favware/graphql-pokemon ;;
  remove) docker rmi -f favware/graphql-pokemon ;;
  esac
}

case $1 in
-h) help ;;
--help) help ;;
gcloud) gcloudDocker ${@:2:99} ;;
hub) hubDocker ${@:2:99} ;;
*) help ;;
esac
