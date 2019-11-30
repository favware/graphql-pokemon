#!/usr/bin/env bash

ASCIIDOCKER="H4sICANp3F0AA2RvY2tlci50eHQA1VfLDYMwDL1nCkZhNA4MgIhAQuqpnKpuxSSFfO3ECQm/QmVVVRNiv+dnO7Ai7TP1PG4s56B26r7Lj+7tfv/vIGmpB019vUrJZqMdcg/oiIL2aVi4MauCqvkRCiHprE4PAyaBzIbZE81YODE8N6I4MWp1tB6SiLGHSdORMbjlRF1stVoE1qDYLQiMwO5TDBkiSTrBHpMnkmy1GqszvNr6qQhisCcQ4JFuADxPubRaDlM37Q4qzdVXivkaJCA66qbDj5QLQJYEkc4vWUMr6GQOK4lu6lQ+b1llUHHOP20Y4wj6m0Ga8NwTTGMyxraq/G5mS+7xaCCU5sGqA13wsJxcmVvVBnSrOyAXr0KM/tMhwPkj6pyrgZNvc4sfZKsoxNy6gur97bbnZbkZcmasmuF4sHimnEil665Cd+HQhFTjQA314XiF0gFZefb4Xr8/BGKI+2713cVx3X1WvKOXIMsg+YJrCghfSEIWzM0PNYI/wBkQAAA="

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
    build    Builds the docker image
    run      Runs the docker image as container in detached state
    push     Pushes the docker image to the repository
    deploy   Gcloud only: Deploys the pushed docker image to Google Cloud Functions
    remove   Removes the Docker image

${DARKGRAY}
The answer is always 42"
}

printMoby() {
  fancylog "${CYAN}Moby is here!"
  base64 --decode <<<${ASCIIDOCKER} | gunzip
  fancylog "${NC}"
  echo ""
}

gcloudDocker() {
  printMoby

  case $1 in
  build) docker build -t gcr.io/data-sunlight-146313/graphql-pokemon . ;;
  run) docker container run --name graphql-pokemon -d --expose 8080 -p 4000:8080 -it gcr.io/data-sunlight-146313/graphql-pokemon:latest ;;
  push) docker push gcr.io/data-sunlight-146313/graphql-pokemon ;;
  deploy) gcloud beta run deploy --image gcr.io/data-sunlight-146313/graphql-pokemon ;;
  remove) docker rmi -f gcr.io/data-sunlight-146313/graphql-pokemon ;;
  esac
}

hubDocker() {
  printMoby

  case $1 in
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
