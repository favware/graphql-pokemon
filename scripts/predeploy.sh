#!/usr/bin/env bash

cleanup () {
  kill %1
  exit $exit_code
}

set -e
exit_code=1
PORT=4000

yarn start > /dev/null &

trap cleanup EXIT

sleep 30

yarn tsc
yarn graphql-codegen

exit_code=0