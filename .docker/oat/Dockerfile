FROM node:6-slim

MAINTAINER Gregory Buchenberger <gregory.buchenberger@charter.com>

RUN apt-get update && apt-get install -y git build-essential libstdc++-4.9-dev libgcrypt20 libssl-dev --no-install-recommends
# RUN add-apt-repository ppa:ubuntu-toolchain-r/test && apt-get update && apt-get install -y libstdc++-4.9-dev

# Working directory
WORKDIR /app

# NPM install
COPY package.json ./
RUN npm install --unsafe-perm


CMD ["node", "server.js"]
