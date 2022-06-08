start:
	docker-compose up -d
stop:
	docker stop $$(docker ps -q -a)
build:
	docker-compose build
rebuild:
	docker-compose up --force-recreate
start_api:
	cp ./packages/api/envs/local.env ./packages/api/.env && pnpm i && pnpm prisma-gen && pnpm migrate-dev && pnpm dev:api
start_admin:
	pnpm i && pnpm dev:admin
start_viewer:
	pnpm i && pnpm dev:viewer