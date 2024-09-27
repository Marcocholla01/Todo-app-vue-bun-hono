# Todo Project 

A simple Todo application built with Vue.js, Tailwind CSS, and DaisyUI on the client side,Bun and Hono with Sequelize and MySQL on the server side.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Directory Structure](#directory-structure)
- [License](#license)
- [Support](#support)
- [Issues](#issues)
- [Coffee](#coffee)

## Features

- Add, edit, and delete todos
- Mark todos as complete
- Responsive design using Tailwind CSS
- Styled components using DaisyUI

## Technologies Used

- **Client:** Vue.js, Tailwind CSS, DaisyUI
- **Server:** Hono, Sequelize, MySQL
- **Package Manager:** Bun

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (latest LTS version)
- [Bun](https://bun.sh/) (install via the official guide)
- MySQL

### Cloning the Repository

1. Clone this repository:

   ```bash
   git clone https://github.com/marcocholla01/todo-hon-bun-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-hon-bun-app
   ```

### Setting Up the Client

1. Navigate to the client folder:

   ```bash
   cd client
   ```

2. Install dependencies using Bun:

   ```bash
   bun install
   ```

### Setting Up the Server

1. Navigate to the server folder:

   ```bash
   cd ../server
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up your MySQL database and update the database configuration in `configs/dbConfig.js` with your credentials.

## Running the Project Locally

1. Start the server:

   ```bash
   bun dev
   ```

2. Open a new terminal window and navigate back to the client directory:

   ```bash
   cd client
   ```

3. Start the client:

   ```bash
   bun run dev
   ```

4. Visit `http://localhost:5173` in your browser to see the application in action!

## Directory Structure

```
todo-project/
├── client/               # Client-side application
│   ├── src/              # Vue components and assets
│   ├── tailwind.config.js # Tailwind configuration
│   └── ...               # Other client files
├── server/               # Server-side application
│   ├── controllers/      # Controller files
│   ├── routes/           # Route files
│   ├── middlewares/      # Middleware files
│   ├── utils/            # Utility functions
│   └── configs/          # Configuration files
└── README.md             # Project documentation
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For any inquiries or support, please reach out to [marcochollapaul01@gmail.com](mailto:marcochollapaul01@gmail.com).

## Issues

If you encounter any issues, please check the [Issues](https://github.com/marcocholla01/todo-hon-bun-app/issues) section or submit a new issue.

## Coffee

If you enjoy this project and want to support it, consider buying me a coffee! [Buy Me a Coffee](https://www.buymeacoffee.com/marcocholla01)

Thank you for your support!
```