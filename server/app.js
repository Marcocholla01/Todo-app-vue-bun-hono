import { Hono } from 'hono';
import sequelize from './config/dbConfig.js';
import todoRoutes from './routes/todoRoutes.js';

const app = new Hono();

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Custom CORS middleware
app.use('*', (c, next) => {
  const origin = c.req.header('origin'); // Corrected way to access headers

  // Set CORS headers
  c.res.headers.set('Access-Control-Allow-Origin', origin || '*'); // Allow all origins; modify as needed
  c.res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  c.res.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (c.req.method === 'OPTIONS') {
    return c.text('', 204); // Respond to preflight requests
  }

  return next(); // Proceed to the next middleware/route
});

// Use JSON middleware
app.use('*', async (c, next) => {
  if (c.req.method === 'POST' || c.req.method === 'PUT') {
    try {
      await c.req.json(); // This is an asynchronous operation
      await next(); // Call the next middleware
    } catch (err) {
      return c.json({ error: 'Invalid JSON' }, 400);
    }
  } else {
    await next();
  }
});

// Register routes
app.route('/todos', todoRoutes);

export default app;
