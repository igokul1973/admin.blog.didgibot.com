FROM nginx:1.28-alpine3.21

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist /var/www/app

WORKDIR /var/www/app
