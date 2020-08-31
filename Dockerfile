# Use the official image as a parent image.
FROM node:12.18.3-alpine

# Set the working directory.
WORKDIR /usr/src/app

COPY . .

# build client, clean up in /client except /client/build
RUN cd client && npm install && npm run build
RUN mv ./client/build ./build
RUN rm -rf ./client
RUN mkdir client
RUN mv ./build ./client/build

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]

