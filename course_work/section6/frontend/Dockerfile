FROM node:alpine as builder

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
 
COPY --chown=node:node ./package.json .
RUN npm install
COPY --chown=node:node . .
RUN npm run build

FROM nginx as production
COPY --from=builder /home/node/app/build /usr/share/nginx/html
# CMD for start NGINX is not necessary because it is default command of nginx base image. 
