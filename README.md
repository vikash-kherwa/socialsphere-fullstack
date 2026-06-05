# 🌐 SocialSphere – Full Stack Social Media App

A full-stack social media application where users can create posts, upload images, add hashtags, view community posts, and delete posts in real time.

Built with React, Express, MongoDB, and ImageKit cloud storage.

## 🚀 Live Demo

**Frontend:** https://socialsphere-fullstack.vercel.app/

**Backend API:** https://socialsphere-backend-bqqz.onrender.com/posts

## ✨ Features

* Create new posts
* Upload images using ImageKit
* Add hashtags/tags
* Display username and post date
* Delete posts
* Real-time updates without page refresh
* Cloud image storage
* MongoDB database integration
* Responsive Bootstrap UI

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Bootstrap
* Axios
* React Context API
* useReducer

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer

### Cloud Services

* ImageKit
* Render
* Vercel

## 📸 Screenshots

### Feed

![Feed](screenshots/feed.png)

### Create Post

![Create Post](screenshots/createpostss.png)

## 📂 Project Structure

```text
socialsphere-fullstack/
│
├── backend/
│   ├── src/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── src/
├── public/
├── screenshots/
│   ├── feed.png
│   └── createpostss.png
│
├── package.json
└── README.md
```

## ▶️ Run Locally

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

## 📌 Key Learnings

* Building a complete MERN-style application
* REST API development with Express
* MongoDB data modeling using Mongoose
* Image uploads using Multer and ImageKit
* React Context API state management
* CRUD operations
* Frontend and backend deployment
* Environment variable management
* Production deployment with Render and Vercel

## 🔗 GitHub Repository

https://github.com/vikash-kherwa/socialsphere-fullstack

---

Made by **Vikash Kherwa**
