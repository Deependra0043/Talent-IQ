![Demo App](/Frontend/public/screenshot-for-readme.png)

# Talent-IQ 🚀

Talent-IQ is a full-stack AI-powered interview platform designed to streamline technical interviews through real-time video communication, coding sessions, and collaborative discussions. It enables recruiters and candidates to conduct seamless online interviews with integrated chat and session management features.

## ✨ Features

* 🔐 Secure Authentication using Clerk
* 🎥 Real-time Video Interview Sessions using Stream
* 💬 Integrated Chat System for interviewer-candidate communication
* 📅 Create and Manage Interview Sessions
* 👥 User Session Dashboard
* 🔒 Protected Routes and Middleware Authentication
* ⚡ Modern and Responsive UI built with React and Tailwind CSS
* 🌐 RESTful API architecture using Express.js
* 📊 MongoDB database integration for persistent data storage

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* Clerk Authentication
* Stream Video SDK

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Clerk Express Middleware
* Stream Server SDK

### External Services

* Clerk (Authentication)
* Stream (Video Calling & Chat)

## 📁 Project Structure

```
Talent-IQ/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── session.controller.js
│   │   │   └── chat.controller.js
│   │   │
│   │   ├── routes/
│   │   │   ├── session.route.js
│   │   │   └── chat.route.js
│   │   │
│   │   ├── models/
│   │   │   ├── session.model.js
│   │   │   └── user.model.js
│   │   │
│   │   ├── lib/
│   │   │   ├── db.js
│   │   │   └── stream.js
│   │   │
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   │
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── node_modules/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── SessionCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CreateSession.jsx
│   │   │   └── Room.jsx
│   │   │
│   │   ├── lib/
│   │   │   └── axios.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── node_modules/
│
├── README.md
└── .gitignore
```

## ⚙️ Environment Variables

### Backend (.env)

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_string

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

### Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
VITE_API_URL=http://localhost:3000/api
```

## 🚀 Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Deependra0043/Talent-IQ.git
cd Talent-IQ
```

### Backend Setup

```bash
cd Backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:3000
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

## 🔄 Workflow

1. User authenticates using Clerk.
2. Users can create interview sessions.
3. Backend generates Stream video/chat sessions.
4. Session details are stored in MongoDB.
5. Participants join interview rooms for real-time collaboration.

⭐ If you found this project useful, consider giving it a star!
