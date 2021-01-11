# targets: prerequisites
#    command
#    command
#    command

newstart:
	docker-compose up -d --build
	cd "./client" && npm install
	cd "./laravel" && composer install
	cd "./client" && npm run build
	cd "./laravel" && php artisan migrate:fresh --seed
	open http://localhost/
