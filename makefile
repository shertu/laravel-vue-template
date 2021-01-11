# targets: prerequisites
#    command
#    command
#    command

fresh: update build database.rebuild start

update:
	cd "./client" && npm update
	cd "./laravel" && composer update
	docker-compose up -d --build
	docker-compose stop

build:
	cd "./client" && npm run build

database.rebuild:
	docker-compose up -d database
	sleep 1.57
	cd "./laravel" && php artisan migrate:fresh --seed
	docker-compose stop database

start:
	docker-compose up -d
	open http://localhost/
