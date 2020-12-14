FROM php:apache
COPY ./src/ /var/www/html/
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf