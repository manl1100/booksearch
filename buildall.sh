#! /bin/bash

docker build --no-cache -t bk_web -f react
docker build --no-cache -t bk_server -f server