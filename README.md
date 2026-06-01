![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-API-black)
![HuggingFace](https://img.shields.io/badge/HuggingFace-AI-yellow)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black)

# 🚀 AI Caption Studio

AI Caption Studio is a full-stack AI-powered web application that generates captions, moods, and hashtags from uploaded images.

The application uses computer vision through the Hugging Face Inference API to analyze image content and provide social-media-ready captions instantly.

## 🌐 Live Demo

https://ai-caption-studio-seven.vercel.app

---

## ✨ Features

* 📸 Upload images from your device
* 🤖 AI-powered image understanding
* 📝 Automatic caption generation
* 😊 Mood detection
* 🏷️ Relevant hashtag suggestions
* ⚡ Fast and responsive UI
* 🌐 Fully deployed on the cloud

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Multer
* Sharp

### AI Integration

* Hugging Face Inference API
* Microsoft ResNet-50 Model

### Deployment

* Vercel
* Render

---

## 📂 Project Structure

```text
AI_CAPTION_STUDIO
│
├── backend
│   ├── services
│   │   └── ai.service.js
│   ├── src
│   │   ├── routes
│   │   │   └── ai.routes.js
│   │   ├── services
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── public
    ├── src
    │   ├── components
    │   │   ├── UploadBox.jsx
    │   │   ├── Loader.jsx
    │   │   └── ResultCard.jsx
    │   ├── assets
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

---

## ⚙️ How It Works

1. User uploads an image.
2. Backend receives and processes the image.
3. Sharp optimizes the image for faster AI inference.
4. Hugging Face ResNet-50 analyzes image content.
5. Image labels are classified into scene categories.
6. The application generates:

   * Caption
   * Mood
   * Hashtags
7. Results are displayed instantly on the frontend.

---

## 🎯 Key Highlights

* Full-Stack Application Development
* REST API Architecture
* AI Integration with Hugging Face
* Image Processing & Optimization
* Responsive UI Design
* Cloud Deployment using Vercel & Render

---

## 🔮 Future Enhancements

* Story-Based Captions
* Multiple Caption Styles
* Caption History
* Copy-to-Clipboard Feature
* Song Recommendations
* Downloadable Caption Cards
* User Authentication
* Saved Caption Collections

---

## 👨‍💻 Developer

**Sarthak Jain**

Built to explore the intersection of AI, Computer Vision, and Full-Stack Web Development.

If you found this project interesting, consider giving it a ⭐ on GitHub.
