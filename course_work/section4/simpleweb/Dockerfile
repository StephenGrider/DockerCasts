# Specify base image
FROM node:alpine

WORKDIR /usr/app
#Only copy over package.json to prevent having to rebuild everything after npm install if other source code files are changed. 
COPY ./package.json .

# Install some dependencies
RUN npm install
COPY . .

# Default command 
CMD ["npm", "start"]
