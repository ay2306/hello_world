FROM node:alpine
COPY . /code_app
WORKDIR /code_app
RUN npm install
RUN npm test
CMD node app.js