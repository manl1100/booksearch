#! /bin/bash

docker build --no-cache -t bk_base docker/base
docker build --no-cache -t bk_web docker/web