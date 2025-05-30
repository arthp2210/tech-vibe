# 📱 TECH VIBE - Tech Event Discovery App

A cross-platform mobile application built with React Native (Expo) and Node.js that helps users discover local tech events, participate in discussions, and manage their profiles.

---

## 🚀 Setup Guide

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)
- Expo CLI (`npm install -g @expo/cli`)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd my-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   Create `.env` file in `my-backend/` with:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server**
   ```bash
   npm start
   # or
   node server.js
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to project root**
   ```bash
   cd techeventProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Expo development server**
   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - Scan QR code with Expo Go app (mobile)
   - Press 'i' for iOS simulator
   - Press 'a' for Android emulator

---

## 🎯 Theme Rationale: Tech & Startup Culture

### Why Tech Events?
Our application focuses on **technology and startup ecosystem** because:

- **High Demand**: Growing interest in tech meetups, hackathons, and networking events
- **Target Audience**: Students and young professionals seeking career growth
- **Community Building**: Connects like-minded individuals in the tech space
- **Skill Development**: Access to workshops, coding bootcamps, and learning opportunities

### Event Categories
- 🚀 Startup Meetups
- 💻 Hackathons
- 🎓 Coding Bootcamps
- 🤝 Networking Events
- 📚 Tech Workshops
- 🎤 Conference & Talks

### Design Philosophy
- Clean, modern interface appealing to tech-savvy users
- Dark/Light mode support for better user experience
- Category-based browsing for easy event discovery
- Minimalist design focusing on functionality

---

## 👥 Team Roles and Contributions

| Team Member | Student ID | Primary Role | Key Contributions |
|-------------|------------|--------------|-------------------|
| **Aryan** | S20230940 | Backend Developer | • Built RESTful APIs with Express.js<br>• Implemented JWT authentication system<br>• Designed MongoDB schemas and models<br>• Created middleware for route protection |
| **Arath** | S20230902 | Frontend Developer | • Developed React Native components<br>• Implemented navigation and routing<br>• Integrated frontend with backend APIs<br>• Designed responsive UI/UX |
| **Ayush** | S20230901 | Project Manager | • Coordinated team tasks and deadlines<br>• Maintained project timeline<br>• Facilitated team meetings and communication<br>• Managed version control and deployments |
| **Sonuben** | S20230923 | QA & Documentation | • Conducted comprehensive testing<br>• Created project documentation<br>• Reported and tracked bug fixes<br>• Prepared presentation materials |

---

## 📡 API Documentation

**Base URL**: `http://localhost:5000/api`

### Authentication Routes (`/api/auth`)

#### Register User
- **POST** `/api/auth/register`
- **Access**: Public
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- **Access**: Public
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Get User Profile
- **GET** `/api/auth/profile`
- **Access**: Private (requires JWT token)
- **Headers**: `Authorization: Bearer <token>`

#### Update User Profile
- **PUT** `/api/auth/profile`
- **Access**: Private (requires JWT token)
- **Headers**: `Authorization: Bearer <token>`

### Events Routes (`/api/events`)

#### Get All Events
- **GET** `/api/events`
- **Access**: Public
- **Description**: Retrieve list of all tech events

#### Create New Event
- **POST** `/api/events`
- **Access**: Public
- **Body**:
  ```json
  {
    "title": "React Native Workshop",
    "description": "Learn mobile app development",
    "date": "2024-06-15",
    "location": "Tech Hub",
    "category": "Workshop"
  }
  ```

### RSVP Routes (`/api/rsvp`)

#### RSVP to Event
- **POST** `/api/rsvp`
- **Access**: Public
- **Body**:
  ```json
  {
    "eventId": "event_id_here",
    "userId": "user_id_here"
  }
  ```

### Comments Routes (`/api/comments`)

#### Add Comment to Event
- **POST** `/api/comments`
- **Access**: Private (requires JWT token)
- **Body**:
  ```json
  {
    "eventId": "event_id_here",
    "comment": "Looking forward to this event!"
  }
  ```

#### Get Event Comments
- **GET** `/api/comments/:eventId`
- **Access**: Public
- **Description**: Retrieve all comments for a specific event

---

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Protected Routes**: Middleware authentication for sensitive endpoints
- **Input Validation**: Server-side validation for all API requests

---

## 📱 Frontend Features

### Screen Structure
- **Home**: Event discovery and featured events
- **Events**: Browse all events by category
- **Profile**: User profile management
- **Login/Register**: Authentication screens
- **Settings**: App preferences and configurations

### Key Technologies
- React Native with Expo
- Axios for API calls
- AsyncStorage for local data persistence
- React Navigation for screen transitions

---

## 🛠️ Project Structure

```
techeventProject/
├── my-backend/
│   ├── controllers/         # Business logic
│   ├── middleware/         # Authentication middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API route definitions
│   └── server.js          # Express server setup
├── app/
│   ├── tabs/              # Tab navigation screens
│   └── services/          # API service functions
├── components/            # Reusable UI components
└── assets/               # Images and static files
```

---

## 🎯 Future Enhancements

- [ ] Push notifications for event reminders
- [ ] Google Maps integration for event locations
- [ ] Social media sharing
- [ ] Event reviews and ratings
- [ ] Advanced search and filtering

---

## 📝 Testing

- **API Testing**: Postman collections for all endpoints
- **Manual Testing**: Comprehensive testing on iOS and Android
- **Device Testing**: Real device testing using Expo Go

---

## 🚀 Deployment

### Backend Deployment
- Can be deployed on Heroku, Railway, or any Node.js hosting service
- Ensure environment variables are set in production

### Frontend Deployment
- Build using `expo build`
- Deploy to App Store/Google Play or use Expo's hosted service

---