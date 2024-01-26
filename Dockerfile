FROM node:alpine
COPY . /code_app
WORKDIR /code_app
CMD node app.js