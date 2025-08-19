# 🌍 Wonderlust

Wonderlust is a full-stack travel and stay booking platform inspired by [Airbnb](https://www.airbnb.com/). This web application allows users to explore, list, and book unique places around the world.

Built using the **MERN stack**, Wonderlust integrates various features including authentication, image upload via Cloudinary, form validation, and extensive error handling mechanisms.

## 🚀 Features

- 🏘️ List and explore unique accommodations
- 🔐 User authentication (register, login, logout)
- 📸 Image upload via Cloudinary
- 🧾 Form validation with Joi
- 💾 Data persistence with MongoDB
- ⚠️ Comprehensive error handling for robust user experience
- 📦 Flash messages for UI feedback

## 🛠️ Tech Stack

- **Frontend**: EJS templating with Bootstrap
- **Backend**: Express.js, Node.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js (local strategy)
- **Image Storage**: Cloudinary
- **Session Store**: connect-mongo

## 📦 Dependencies

```json
"cloudinary": "^1.41.3",
"connect-flash": "^0.1.1",
"connect-mongo": "^5.1.0",
"dotenv": "^16.4.7",
"ejs": "^3.1.10",
"ejs-mate": "^4.0.0",
"express": "^4.21.2",
"express-session": "^1.18.1",
"joi": "^17.13.3",
"method-override": "^3.0.0",
"mongoose": "^8.9.1",
"multer": "^1.4.5-lts.1",
"multer-storage-cloudinary": "^4.0.0",
"passport": "^0.7.0",
"passport-local": "^1.0.0",
"passport-local-mongoose": "^8.0.0"
```
---

⚙️ Setup Instructions
--

1. Clone the repository
--
cd wonderlust

---

2. Install dependencies
--
npm install
---

3. Run the app
--
node app.js

---


### 🛡️ Error Handling

- Wonderlust implements robust error handling throughout the app:
- Custom error classes with status codes
- Try-catch wrappers in async routes
- User-friendly error pages (404, 500, etc.)
- Flash messaging for feedback

### 📸 Screenshots
Coming soon...
---
