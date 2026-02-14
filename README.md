# 🎬 Streamify – Secure Media Platform API

## 🚀 Overview

Streamify is a scalable backend API for a YouTube-like media platform built with Node.js and MongoDB.

It supports:

* Secure user authentication (JWT-based)
* Media upload & storage via Cloudinary
* Channel and subscriber management
* Watch history tracking
* Optimized MongoDB aggregation pipelines
* Containerized deployment using Docker

This project focuses on secure architecture, modular design, and production-ready backend practices.

---

## 🧱 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose, Aggregation Pipelines)
* **Authentication:** JWT (Access + Refresh Tokens), bcrypt
* **File Upload:** Multer
* **Cloud Storage:** Cloudinary
* **Containerization:** Docker
* **API Testing:** Postman

---

## 🔐 Authentication Architecture

Streamify implements a secure authentication flow:

1. User logs in with credentials
2. Password verified using bcrypt hashing
3. Server issues:

   * Short-lived Access Token
   * Long-lived Refresh Token (stored securely in HTTP-only cookies)
4. Protected routes validate JWT middleware
5. Refresh token endpoint generates new access tokens

### Security Features:

* HTTP-only cookies
* Token rotation
* Password hashing with salt
* Centralized error handling middleware

---

## 📦 Core Features

### 👤 User Management

* User registration & login
* Secure password storage
* Profile update (avatar & cover image upload)
* Channel information retrieval

### 🎥 Media Handling

* Video uploads via Multer
* Cloudinary integration for storage
* Thumbnail and metadata management
* Secure file validation

### 📊 Data Aggregation

* Subscriber count calculation
* Watch history tracking
* Channel statistics using MongoDB aggregation pipelines
* Optimized queries for scalable performance

---

## 🧠 Database Design (High-Level)

### Collections

* Users
* Videos
* Subscriptions
* Comments
* WatchHistory

Indexes added for:

* User email lookup
* Video owner reference
* Subscription relations

Aggregation pipelines used for:

* Channel profile summary
* Subscriber counts
* Video engagement metrics

---

## ⚙️ Installation & Local Setup

```bash
# Clone repository
git clone https://github.com/RuthWick-14/streamify.git

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run server
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 🧪 API Testing

* Postman used for endpoint testing
* Includes authentication flow testing
* File upload validation tests
* Token refresh verification

---

## 📈 Performance Considerations

* Aggregation pipelines reduce multiple queries into single optimized operations
* JWT-based stateless authentication improves scalability
* Modular controller-service architecture for maintainability
* Docker containerization enables easy deployment

---

## 🗂 Project Structure

```
streamify/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── config/
├── Dockerfile
└── server.js
```

---

## 🎯 Learning Outcomes

* Secure authentication design
* REST API architecture best practices
* MongoDB aggregation optimization
* Cloud media integration
* Production-ready backend structuring
