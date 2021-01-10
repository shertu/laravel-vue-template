# targets: prerequisites
#    command
#    command
#    command

# npm scripts
client.build:
	cd "./client" && npm run build
client.eslint:
	cd "./client" && npm run eslint
client.openapi:
	cd "./client" && npm run openapi
client.start:
	cd "./client" && npm run start
client.stylelint:
	cd "./client" && npm run stylelint

# docker-compose
start: client.build
	docker-compose up -d --build --no-deps --remove-orphans
build: client.build
	docker-compose -f docker-compose.production.yml up -d --build --no-deps --remove-orphans

# laravel
laravel.update:
	cd "./laravel" && composer update