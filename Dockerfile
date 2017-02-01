FROM node:6-slim

MAINTAINER Gregory Buchenberger <gregory.buchenberger@charter.com>

RUN apt-get update && apt-get install -y git --no-install-recommends

# Working directory
WORKDIR /app

# NPM install
COPY package.json ./
RUN npm install --unsafe-perm


CMD ["node", "server.js"]
