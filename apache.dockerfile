FROM php:apache AS development

# PHP extensions
RUN docker-php-ext-install pdo_mysql

# apache configruation
COPY ./apache/000-default.conf /etc/apache2/sites-available/000-default.conf

# http://httpd.apache.org/docs/current/mod/mod_rewrite.html
RUN a2enmod rewrite

# https://docs.docker.com/develop/develop-images/multistage-build/
FROM development AS production
COPY ./laravel/ /var/www/html/
RUN chmod -R 777 /var/www/html/storage /var/www/html/bootstrap/cache
