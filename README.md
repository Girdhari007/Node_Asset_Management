# Node Asset Project

Simple Asset Management API (Fastify + TypeScript + MySQL).

## Prerequisites
- Node.js (16+)
- MySQL

## Environment
Create a '.env' file with the following variables:

 `DB_HOST` — database host
 `DB_PORT` — database port
 `DB_USER` — database user
 `DB_PASSWORD` — database password
 `DB_NAME` — database name
 `PORT` — (optional) server port, defaults to `3000`


## Run (development)
npm run dev

Or build and run:

npm run build
npm start

## Basic API Endpoints
Example for assets
- `GET /api/assets` — list all assets
- `GET /api/assets/:id` — get asset by id
- `POST /api/assets` — create an asset (JSON body)

## Notes
- The project uses a MySQL connection pool (see `src/config/db.ts`).
- Responses follow the shape `{ success: boolean, message: string, data?: any, error?: any }`