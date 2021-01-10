FROM php:apache AS development
COPY ./apache/000-default.conf /etc/apache2/sites-available/000-default.conf

FROM development AS production
COPY ./laravel/ /var/www/html/
RUN chmod -R 777 /var/www/html/storage /var/www/html/bootstrap/cache

# Consider using multi-stage development
# https://docs.docker.com/develop/develop-images/multistage-build/

