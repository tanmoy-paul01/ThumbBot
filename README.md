# 🎨 ThumbBot — AI Thumbnail Generator

ThumbBot is an AI-powered thumbnail generator web app that helps creators generate eye-catching thumbnails instantly with a clean and responsive UI. Built using the **MERN stack** and **Tailwind CSS**, it integrates **Google Gemini API** for AI-based image generation, along with secure authentication and cloud image storage.

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

### Frontend
- React.js  
- Tailwind CSS  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### AI & Cloud Services
- Google Gemini API (AI Image Generation)
- Cloudinary (Image Upload & Storage)

### Security
- bcrypt (Password Encryption)
- express-session (Authentication)

---

## 📂 Project Structure

ThumbBot/
│
├── client/ # React Frontend
├── server/ # Node + Express Backend
├── models/ # MongoDB Models
├── routes/ # API Routes
├── controllers/ # Business Logic
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/tanmoy-paul01/ThumbBot.git
cd ThumbBot
```

### 2️⃣ Clone the Repository

#Backend

cd server
npm install

#Frontend

cd client
npm install

###3️⃣ Setup Environment Variables

#Create a .env file inside server/ and add:

MONGO_URI=your_mongodb_url
SESSION_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

GEMINI_API_KEY=your_google_gemini_api_key

###4️⃣ Run the Project

#Start Backend

npm run server

#Start Frontend

npm start


###🌟 Why ThumbBot

ThumbBot combines AI-powered image generation with modern web technologies to simplify thumbnail creation. Whether you're a content creator, marketer, or student, ThumbBot helps you generate professional thumbnails quickly without design expertise.

###🚀 Future Improvements

1.Drag-and-drop thumbnail editor
2.Custom AI templates
3.Download history & dashboard
4.Social media auto-size presets
5.AI text overlay suggestions

###👨‍💻 Author

#Tanmoy Paul

#If you found this project useful, feel free to ⭐ the repository!

---

Now your project sounds 🔥 professional — AI + MERN + Gemini + Cloudinary is strong for resume and portfolio.

If you want, I can also:

- Add GitHub badges  
- Make it more recruiter-friendly  
- Write a short LinkedIn post for this project  
- Create a portfolio description version  

Just tell me what you need next 😎
