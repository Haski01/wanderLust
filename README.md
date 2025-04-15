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
⚙️ Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/wonderlust.git
cd wonderlust
Install dependencies

bash
Copy
Edit
npm install
Environment Variables

Create a .env file in the root directory and add:

bash
Copy
Edit
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
DB_URL=your_mongodb_connection_string
SECRET=your_session_secret
Run the app

bash
Copy
Edit
npm start
The app will run on http://localhost:3000

🛡️ Error Handling
Wonderlust implements robust error handling throughout the app:

Custom error classes with status codes

Try-catch wrappers in async routes

User-friendly error pages (404, 500, etc.)

Flash messaging for feedback

✨ Future Improvements
Search and filter system

Map integration with Google Maps or Mapbox

Reviews and ratings

Role-based permissions

📸 Screenshots
Coming soon...

🧑‍💻 Author
Developed by Your Asad

🌐 Wonderlust is a learning project and not affiliated with Airbnb.

yaml
Copy
Edit

---
