
# 🎨 ThumbBot — AI Thumbnail Generator

**ThumbBot** is an AI-powered thumbnail generator web app that helps creators generate eye-catching thumbnails instantly with a clean and responsive UI. Built using the **MERN stack** and **Tailwind CSS**, it integrates the **Google Gemini API** for AI-

---

## 🔗 Live Demo

Access the live deployed version here: **[ThumbBot Demo](https://thumb-bot-kohl.vercel.app/)**.

*Note: The frontend is live—ensure the backend API is accessible (deployed or local) for full functionality.*

---

## 🚀 Features

- 🤖 AI-powered thumbnail generation using Google Gemini  
- 🖼 AI image generation from prompts  
- 📤 Image upload via Cloudinary  
- 🔐 Secure session-based authentication  
- 🔑 Password encryption with bcrypt  
- 📱 Fully responsive UI (Tailwind CSS)  
- ⚡ Fast and intuitive user experience 

---

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Auth & Security**: Session, bcrypt  
- **File Storage**: Cloudinary  
- **AI**: Google Gemini API  
- **Deployment**: Vercel

---

## 📂 File Structure

The project follows a clean and modular MERN structure:

```
ThumbBot/
│
├── client/ # Frontend (Vite + React + TypeScript)
│ ├── assets/ # Static assets
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── configs/ # Configuration files
│ │ ├── context/ # React Context API
│ │ ├── data/ # Static / mock data
│ │ ├── pages/ # Application pages
│ │ ├── sections/ # Page sections
│ │ ├── App.tsx
│ │ ├── main.tsx
│ │ ├── globals.css
│ │ └── types.ts
│ ├── .env
│ ├── .gitignore
│
├── server/ # Backend (Node.js + Express + TypeScript)
│ ├── configs/ # Database & app configurations
│ ├── controllers/ # Business logic
│ ├── middlewares/ # Custom middlewares
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ ├── node_modules/
│ ├── .env
│ ├── package.json
│ ├── package-lock.json
│ ├── server.ts
│ ├── tsconfig.json
│ ├── vercel.json
│ ├── .gitignore
│ └── README.md
│
└── README.md

```

---


## 🚀 Installation & Setup

### 🛠️ Backend Setup

```bash
cd server
npm install
```
Create a `.env` file with:

```env
MONGODB_URI =
SESSION_SECRET =
CLOUDINARY_CLOUD_NAME =
CLOUDINARY_API_KEY =
CLOUDINARY_API_SECRET =
EMAIL_PASSWORD =
GEMINI_API_KEY =
```
Run:
```bash
npm run server
```

### 🛠️ Frontend Setup

```bash
cd client
npm install
```

Run:
```bash
npm run dev
```

---

## 🌟 Why ThumbBot?

ThumbBot combines AI-powered image generation with modern web technologies to simplify thumbnail creation. Whether you're a content creator, marketer, or student, ThumbBot helps you generate professional thumbnails quickly without design expertise.

---

## 🤝 Contributing

Contributions are welcome!

---

## 🧑‍💻 Contact

For questions, suggestions, or issues, contact **Tanmoy Paul** or open an issue in the repo.

---

**THANK YOU**
