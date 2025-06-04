// config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Create MySQL pool
export const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "saghar",
  database: process.env.DB_DATABASE || "sagar",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Initialize database
export const initializeDatabase = async () => {
  try {
    const connection = await pool.getConnection();

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

    const [rows] = await connection.query(
      'SELECT COUNT(*) as count FROM users WHERE role = ?',
      ['admin']
    );

    if (rows[0].count === 0) {
      const bcrypt = await import('bcrypt');
      const hashedPassword = await bcrypt.hash('admin123', 10);

      await connection.query(
        `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`,
        ['Admin', 'tufailahmedsagar951@gmail.com', hashedPassword, 'admin']
      );

      console.log('Default admin user created');
    }

    connection.release();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};