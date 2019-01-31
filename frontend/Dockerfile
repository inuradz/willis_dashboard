# base image
FROM node:latest

# set working directory
RUN mkdir /code
ADD . /code/
WORKDIR /code/

RUN npm install --silent
RUN npm install react-scripts --silent

# start app
CMD ["npm", "start"]

