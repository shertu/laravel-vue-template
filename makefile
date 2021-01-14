# targets: prerequisites
#    command
#    command
#    command

newstart:
	docker-compose up -d --build
	cd client && npm install
	cd laravel && composer install
	cd client && npm run build
	cd laravel && php artisan migrate:fresh --seed
	open http://localhost/

openapi:
	cd laravel && php artisan openapi:generate > openapi.json
	mv laravel/openapi.json client
	rm -r client/src/openapi-generator
	cd client && npm run openapi
	rm client/openapi.json

lint:
	php-cs-fixer fix laravel --rules=@Symfony
