# Biblioteca App

This is a library management application built with React for the frontend and FastAPI for the backend. The backend connects to an Amazon RDS MySQL database.

## Getting Started

### Backend

1. Navigate to the `backend` directory.
2. Build and run the Docker containers:

```bash
cd backend
docker-compose down #en caso tengas una version previa
docker-compose build
docker-compose up 
```

```bash
cd frontend/biblioteca-app
#Install the dependencies and start the development server:
npm install
npm start
```
