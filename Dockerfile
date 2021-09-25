FROM node:11 

COPY . /app
WORKDIR /app

RUN npm install

EXPOSE 5000

CMD [ "node", "index.js" ]

