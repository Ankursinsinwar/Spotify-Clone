# Setup Spotify Clone 🎵

## 1. Clone the repository 📌
``` bash
git clone https://github.com/Ankursinsinwar/Spotify-Clone.git
```

## 2. install dependency ⚡

### 2.1 For frontend ⚛️
``` bash
cd frontend
npm install
```
### 2.2 For backend 🔙
```bash
cd backend
npm install
```

## 3. Add environment variables 🌟

### 3.1 For frontend ⚛️
**Create a `.env.local` file in `frontend` directory and add this line**
``` bash
VITE_CLERK_PUBLISHABLE_KEY=Your_VITE_CLERK_PUBLISHABLE_KEY
```

### 3.2 For Backend 🔙
**Create a `.env` file in `backend` directory and add these lines**
```bash
PORT=5000
mongoDB_URI=Your_MongoDB+URL
# Looks like this 👇
# mongodb+srv://<db_username>:<db_password>@cluster0.zvsca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
# change <db_username> and <db_password> to you mongoDB user's username and password

ADMIN_EMAIL=email_of_admin
# add your email id

CLOUDINARY_API_KEY = Your_Cloudnary_API_KEY
CLOUDINARY_API_SECRET = Your_Cloudnary_API_SECRET
CLOUDINARY_CLOUD_NAME = Your_Cloudnary_cloud_name

NODE_ENV = development
# Fore devlopment phase. for production phase change it to production


CLERK_PUBLISHABLE_KEY = Your_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY = Your_CLERK_SECRET_KEY
```

# 4. Run the application 🚀
### 4.1 Run Backend 🔙
``` bash
nodemon dev
```

### 4.2 run Frontend ⚛️
``` bash
npm run dev
```

### 4.3 open `http://localhost:3000/` in browser 🌐
