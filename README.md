# Task Management App - Backend

This is the backend for the **Task Management Application**, built with **Node.js, Express, and MongoDB** following the **MVC architecture**.

## Features
✅ Secure API with Firebase Authentication  
✅ CRUD operations for task management  
✅ Instant task persistence in MongoDB  
✅ Drag-and-drop support with **update-positions** route  
✅ Clean and modular code structure  

## Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Server Framework)
- **MongoDB** (Database)
- **Mongoose** (ORM)
- **Cors & dotenv** (for security & environment variables)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/abu-bakkar-js-dev/task-management-app-server.git
   ```
2. Navigate to the project directory:
   ```sh
   cd task-manager-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a **.env** file with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
5. Start the server:
   ```sh
   npm run dev
   ```

## API Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Get all tasks |
| PUT | `/tasks/:id` | Update a task (title, description, category) |
| DELETE | `/tasks/:id` | Delete a task |
| PUT | `/tasks/update-positions` | Update task order |

## Deployment
To deploy on **Vercel**, run:
```sh
vercel
```

## License
MIT License

