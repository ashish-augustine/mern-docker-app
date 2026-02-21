🚀 MERN Stack Task Manager (Dockerized)
A simple, containerized Task Manager application built with the MERN stack (MongoDB, Express, React, Node.js). This project is designed to run seamlessly on any machine using Docker, eliminating the "it works on my machine" problem.



🛠️ Prerequisites
Before you begin, ensure you have the following installed on your laptop:

Git

Docker Desktop (Includes Docker Compose)


🚀 Getting Started
Follow these steps to get the project running locally:
1. Clone the Repository
Bash

git clone https://github.com/your-username/mern-docker-app.git
cd mern-docker-app



2. Run with Docker Compose
You do not need to run npm install locally. Docker will handle all dependencies inside the containers.

In your terminal, run:

Bash

docker compose up --build
Note: The --build flag ensures that Docker builds fresh images using the provided Dockerfiles.



3. Access the Application
Once the terminal shows that the containers are running:

Frontend: Open http://localhost:3000

Backend API: Open http://localhost:5000/tasks

⚙️ How it Works
MongoDB: A standard MongoDB container is pulled from Docker Hub. Data is persisted using a Docker volume (mongo-data), so your tasks won't disappear when you stop the containers.

Backend: A custom Node.js image is built. It connects to the database using the internal Docker network name mongodb:27017.

Frontend: A React development server runs inside a container and communicates with the Backend API at localhost:5000.

🧹 Cleaning Up
To stop the application and remove the containers, press Ctrl + C in your terminal or run:

Bash

docker-compose down
To remove the database volume as well (this will delete your data):

Bash

docker-compose down -v





