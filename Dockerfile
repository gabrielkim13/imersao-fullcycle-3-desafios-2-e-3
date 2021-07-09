FROM node:14.17-alpine

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app
