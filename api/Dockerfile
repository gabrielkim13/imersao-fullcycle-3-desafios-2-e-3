FROM node:14.17-alpine

WORKDIR /home/node/app

COPY . .

RUN yarn
RUN yarn build

USER node

ENTRYPOINT ["yarn", "start:prod"]
