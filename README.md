<h2>Full-stack aplication</h2>

Stack: [Node](https://nodejs.org/en/), [Nest.js](https://nestjs.com/), [PostgreSQL](https://www.postgresql.org/), React[https://reactjs.org], Docker[https://www.docker.com]

## Description

Данное приложение написанно в рамках решения тестовой задачи. Приложение состоит из двух частей - frontend и backend. Каждая часть обернута в свой докер-контейнер, в контейнере с backendom так же находится база данных postgres. 

### Run

Для запуска необходимо отдельно запустить backend и frontend.

backend:

````shell script
cd backend
docker-compose build
docker-compose up
````

frontend:

````shell script
cd frontend
docker-compose build
docker-compose up
````

### Environment

В папке backend находится файл .env.example, необходимо создать файл .env со всеми полями которые содержит пример