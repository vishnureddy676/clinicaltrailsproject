# My Dockerized Application

This repository contains a Dockerized application consisting of a frontend served by Nginx and a backend served by Node.js.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your machine.

- [Docker Installation Guide](https://docs.docker.com/get-docker/)
- [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

## Usage



1. Navigate to the repository directory:

    ```bash
     Navigate to the repository directory: `cd mini-project`
    ```

2. Run the following command to start the application:

    ```bash
    docker-compose up
    ```

3. Once the containers are up and running, you can access the application in your web browser:

    ```
    http://localhost:8080
    ```

    The frontend served by Nginx will be available at the above URL.

## Ports

- Nginx: `8080` (mapped to container port `8080`)
- Node.js: `3000` (mapped to container port `3000`)

