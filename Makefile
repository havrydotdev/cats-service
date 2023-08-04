include .env

psql-init:
	docker kill postgres
	docker rm postgres
	docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -d postgres