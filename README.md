# Modern Company Website

A modern full-stack company website built with a client-server architecture. This project includes a frontend client and a backend server, supporting concurrent development and deployment.

## 🛠️ Project Structure

```
modern-company-website/
│
├── client/         # Frontend (e.g., React, Vite)
├── server/         # Backend (e.g., Express)
├── package.json    # Root scripts and project metadata
```

---

## 🚀 Features

- 💻 Modern frontend with client-side rendering
- 🖥️ Backend with API support and email functionality (Nodemailer)
- 🔄 Concurrent development of client and server
- 📦 Structured scripts for build, development, and deployment

---

## 📦 Installation

Install all dependencies for both client and server with a single command:

```bash
npm install
```

This will trigger the `postinstall` script to run:

```bash
npm run install:client && npm run install:server
```

---

## 🧪 Development

To run both frontend and backend concurrently during development:

```bash
npm run dev
```

Or individually:

- Start only the frontend:
  ```bash
  npm run dev:client
  ```

- Start only the backend:
  ```bash
  npm run dev:server
  ```

---

## 🏗️ Build

To build the frontend for production:

```bash
npm run build
```

---

## 🚀 Start (Production)

To start the backend server (after building the frontend):

```bash
npm start
```

---

## 📧 Email Support

This project uses [`nodemailer`](https://www.npmjs.com/package/nodemailer) for sending emails from the server (e.g., contact forms, notifications).

---

## 🔧 Tech Stack

- **Frontend:** Depends on what’s inside `client/` (e.g., React, Vite)
- **Backend:** Node.js with Express (assumed from structure)
- **Email:** Nodemailer
- **Dev Tools:** `concurrently` for parallel script execution

---

## 👨‍💻 Author

**Hafiz Sagar**  
[GitHub Profile](https://github.com/HafizSagar1039)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> ⚡ Tip: Customize the sections according to the actual tools or frameworks you use in `client/` and `server/` folders.