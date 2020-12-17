FROM php:apache
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ./wwwroot/ /var/www/html/