# React-Express-Docker
<div sty;e="display: flex; flex-direction: row; gap: 12px;">
    <img src="https://img.icons8.com/color/50/docker.png" width="50" height="50" style="vertical-align:middle"> 
    <img src="https://img.icons8.com/color/48/react-native.png" width="50" height="50" style="vertical-align:middle">
    <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" width="50" height="50" style="vertical-align:middle">
</div>

Docker is a powerful platform for developing, shipping, and running applications inside containers. Containers provide a lightweight and portable way to encapsulate applications and their dependencies, ensuring consistency across different environments.

---

## Why use Docker?
Docker creates consistent environments for applications, ensuring they work the same way across different systems. This consistency simplifies development, collaboration, and deployment processes, making it a valuable tool for developers.

---

## Key Concepts

### 1. Containers
Containers are lightweight, isolated environments that package applications along with their dependencies, libraries, and configuration settings.

### 2. Images
Images are executable packages that include everything needed to run a piece of software, such as code, runtime, libraries, and environment variables.

### 3. Docker Engine
Docker Engine is the core component that allows you to create and manage containers. It consists of a server, a REST API, and a command-line interface (CLI) client.

### 4. Dockerfile
A Dockerfile is a script used to create a Docker image. It contains instructions for building the image, specifying the base image, adding files, and running commands.

### 5. Docker Compose
Docker Compose is a tool for defining and managing multi-container Docker applications. It enables you to define services, networks, and volumes in a single file and spin up your application with a single command.

### 6. Registry
Docker registries store Docker images. Docker Hub is a popular public registry, and there are private or enterprise registries available for storing your own images.

---

## Command Lines

Build an image

```bash
docker build -t _image_name_ .
