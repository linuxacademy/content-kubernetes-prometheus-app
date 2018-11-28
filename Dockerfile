FROM node:alpine
RUN mkdir /var/node
WORKDIR /var/node
ADD . /var/node
RUN npm install
EXPOSE 3000
CMD npm start
