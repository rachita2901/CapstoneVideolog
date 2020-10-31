FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENTRYPOINT  ["node"]
CMD  ["server.js"]
EXPOSE 3000