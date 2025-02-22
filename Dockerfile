# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
 
# Stage 2
FROM nginx:1.17.1-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/www /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf