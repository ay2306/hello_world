FROM node:alpine
COPY . /code_app
WORKDIR /code_app
RUN npm install
CMD node app.js