#!/usr/bin/env bash

cleanup () {
  kill %1
  exit $exit_code
}

set -e
exit_code=1

yarn ts-node src/index.ts > /dev/null &

trap cleanup EXIT

sleep 30

yarn tsc
yarn graphql-codegen

exit_code=0