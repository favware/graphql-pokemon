#!/bin/bash

PORT=${PORT:-4000}

echo "Waiting for service to launch on port ${PORT}..."

while ! nc -z localhost ${PORT}; do   
  sleep 0.1 # wait for 1/10 of the second before check again
done

echo "Service launched"
