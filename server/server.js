// server.js
import app from './app.js';
import sequelize from './config/dbConfig.js';

const PORT = 4000;

// Sync the database and then start the server
sequelize.sync().then(() => {
  Bun.serve({
    port: PORT,
    fetch: (req) => app.fetch(req), // Forward the request to Hono
  });
  
  console.log(`Server running on http://localhost:${PORT}`);
});
