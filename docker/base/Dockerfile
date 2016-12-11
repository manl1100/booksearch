FROM debian:jessie

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get -y upgrade
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive \
      apt-get install -y --no-install-recommends \
        python3 \
        ca-certificates \
        python3-pip \
        vim \
        curl \
        git

RUN pip3 install \
      Flask==0.10.1