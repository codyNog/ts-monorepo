FROM node:16.14.2-alpine3.15 AS base

WORKDIR /app

RUN apk update; \
  apk add --no-cache --virtual .build-deps \
  curl \
  ;

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0

RUN apk del .build-deps

FROM base as deploy

COPY . .

ARG ENVIRONMENT

ENV PORT=80
RUN cp /app/packages/api/envs/${ENVIRONMENT}.env /app/packages/api/.env
RUN pnpm i
RUN pnpm prisma-gen
RUN NODE_ENV=production && pnpm build

CMD pnpm migrate-prd && pnpm start