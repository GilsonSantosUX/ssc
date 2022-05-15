include ./api/.env

.PHONY: up

up:
	docker-componse up -d

.PHONY: down

down:
	docker-componse down

.PHONY: logs

logs:
	docker-componse logs -f