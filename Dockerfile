## build stage ##
FROM node:18.13 as build
WORKDIR /app
COPY . .
RUN npm install --force
EXPOSE 80
ENTRYPOINT [ "npm", "start" ]