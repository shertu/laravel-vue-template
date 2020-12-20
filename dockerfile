FROM php:apache
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ./laravel/ /var/www/html/
RUN chmod -R 777 /var/www/html/storage /var/www/html/bootstrap/cache