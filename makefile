# targets: prerequisites
#    command
#    command
#    command

# Start the web app for local development for the first time
newstart:
	docker-compose up -d --build
	cd client && npm install
	cd laravel && composer install
	cd laravel && php artisan migrate:fresh --seed
	make start

# Generate API client library
openapi:
	cd laravel && php artisan openapi:generate > openapi.json
	mv laravel/openapi.json client
	rm -r client/src/openapi-generator
	cd client && npm run openapi
	rm client/openapi.json

# Start the web app for local development
start:
	docker-compose up -d
	cd client && npm run start

# Lint the code
lint:
	cd client && npm run eslint
	cd client && npm run stylelint
	cd laravel && php-cs-fixer fix . --rules=@Symfony

# Execute unit and feature tests
test:
	cd client && npm run test
	cd laravel && php artisan test
