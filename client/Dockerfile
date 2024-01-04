FROM node:14-slim

WORKDIR /opt/client
COPY . .

RUN npm install
RUN npm install -g live-server

CMD [ "live-server", "build", "-p", "3000" ]