import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';

// Load environment variables
dotenv.config(); 

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Configure middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection pool
export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "saghar",
  database: "sagar",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Initialize database tables if they don't exist
const initializeDatabase = async () => {
  try {
    const connection = await pool.getConnection();
    
    // Create contacts table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(200) NOT NULL,
        message TEXT NOT NULL,
        status ENUM('New', 'Pending', 'Responded', 'Closed') DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create users table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role ENUM('admin', 'editor') DEFAULT 'editor',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create a default admin user if none exists
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM users WHERE role = ?', ['admin']);
    
    if (rows[0].count === 0) {
      // Import bcrypt for password hashing
      const bcrypt = await import('bcrypt');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      await connection.query(`
        INSERT INTO users (name, email, password, role)
        VALUES (?, ?, ?, ?)
      `, ['Admin', 'tufailahmedsagar951@gmail.com', hashedPassword, 'admin']);
      
      console.log('Default admin user created');
    }
    
    connection.release();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('TechVision API is running');
});

// Initialize database and start server
(async () => {
  try {
    await initializeDatabase();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
  }
})();