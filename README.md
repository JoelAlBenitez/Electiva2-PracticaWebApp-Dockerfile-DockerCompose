# Hola Mundo con JavaScript, MySQL y Docker Compose

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web sencilla que muestra un mensaje de **Hola Mundo** y establece una conexión con una base de datos MySQL (Programa practico).

La aplicación fue desarrollada utilizando JavaScript con Node.js y Express. Para facilitar su ejecución y configuración, se implementó Docker Compose, permitiendo levantar tanto el servidor de la aplicación como la base de datos mediante contenedores.

El objetivo de esta práctica es comprender los conceptos básicos de Docker, Docker Compose y la conexión entre una aplicación web y una base de datos MySQL.

## Tecnologías utilizadas

- JavaScript
- Node.js
- Express.js
- MySQL 8.4
- Docker
- Docker Compose

## Requisitos

Para ejecutar este proyecto se necesita:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Git
- Un navegador web

No es necesario instalar Node.js ni MySQL directamente en el equipo, ya que ambos servicios se ejecutan mediante Docker.

## Estructura del proyecto

```text
hola-mundo-docker/
│
├── src/
│   └── index.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Configuración de los servicios

El proyecto cuenta con dos servicios principales:

### Aplicación web

- Tecnología: Node.js y Express.
- Puerto: 3000.
- Función: Mostrar el mensaje de bienvenida y realizar una consulta a MySQL.

### Base de datos

- Motor: MySQL 8.4.
- Base de datos: `hola_mundo`.
- Puerto: 3306.
- Persistencia: Volumen Docker `mysql_data`.

La aplicación utiliza el nombre del servicio `db` para establecer la conexión con MySQL dentro de la red de Docker Compose.

## Ejecución del proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/hola-mundo-docker.git
```

### 2. Entrar al directorio

```bash
cd hola-mundo-docker
```

### 3. Iniciar los servicios

```bash
docker compose up --build
```

Este comando construye la imagen de la aplicación, descarga la imagen de MySQL e inicia ambos servicios.

### 4. Acceder a la aplicación

Abrir el siguiente enlace en el navegador:

[http://localhost:3000](http://localhost:3000)

## Resultado esperado

Al acceder a la aplicación, se muestra el mensaje:

**¡Hola Mundo!**

Además, se realiza una consulta SQL para verificar la conexión con MySQL.

El resultado esperado es:

```text
Estado: Conectado correctamente.
Resultado de la consulta: 1
```

## Detener los servicios

Para detener los contenedores, ejecutar:

```bash
docker compose down
```

Los datos almacenados en MySQL se conservan mediante el volumen configurado.

## Autor

Joel Alberto Benítez

Proyecto académico desarrollado como parte de la asignatura Electiva 2 - Prácticas de DevOps.

## Licencia

Este proyecto fue desarrollado con fines educativos y académicos. Para la asignatura de DevOps del Instituto Tecnológico de las Américas por `Joel Alberto Benitez Varela | 2025-1049`.
