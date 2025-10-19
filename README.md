# 💼 HireVerse – Job Portal Platform

**HireVerse** is a full-stack job portal that bridges the gap between **recruiters** and **job seekers**, enabling smooth job posting, application tracking, and recruitment management — all in one place.

It delivers a smooth, secure, and modern user experience powered by **React.js**, **Redux-toolkit**,  **Tailwind-CSS**  on the frontend and **Node.js**, **Express**, and **MongoDB** on backend.

---

# 🌐 Live Demo – Job Portal Platform
https://hireverse.onrender.com/

---
### 🧑‍💻 Tech Highlights
- ⚛️ **Frontend:** React.js with React Router, Redux Toolkit, and Axios for API communication.
- 🧩 **State Management:** Redux ensures predictable, global state handling across authentication, profiles, jobs, and applications.
- 🌐 **Backend:** RESTful API built with Express.js, Mongoose, and JWT for secure access.
- 🧱 **Database:** MongoDB models with deep relationships among Users, Companies, Jobs, and Applications.
- 📂 **File Uploads:** Handled by Multer (profile photos, resumes, company logos).
- 🔒 **Authentication:** JWT-based secure login, logout, and protected routes.
- 💡 **Scalable Architecture:** Modular code structure (controllers, routes, models, middleware) for clean development.

---

### 👤 User Roles

#### 🧑‍🎓 Job Seeker (Student)
Job seekers can manage their professional profiles and apply for opportunities effortlessly:
- 🔐 **Secure Login & Registration** – Authenticated via JWT with form validation and Redux-managed state.
- 🧾 **Profile Dashboard** – Update bio, skills, and resume; manage profile photo seamlessly.
- 📁 **Resume Upload** – Attach or update your resume anytime.
- 🔎 **Browse Jobs** – Explore listings with search and filters by title, location, job type, or experience.
- 📤 **Apply Instantly** – Apply for any job directly through the interface.
- 📊 **Track Applications** – View all applied jobs, their statuses (pending, accepted, rejected), and timestamps in one place.
- ⚡ **Auto State Sync** – Redux keeps user data, application status, and profile info synced across pages.

---

#### 🧑‍💼 Recruiter
Recruiters get complete control over their company profile, job postings, and candidates Application:
- 🏢 **Company Management**
  - Register and manage company details, including name, description, website, logo, and location.
  - View or update company info through a dedicated dashboard.
- 💼 **Job Management**
  - Post jobs with detailed info: title, description, requirements, salary, experience level, and openings.
  - Edit, update, or delete job listings directly from the dashboard.
  - All jobs link back to the recruiter’s company and account.
- 📋 **Applicant Management**
  - Access all applicants for a specific job in real time.
  - View detailed profiles and resumes of applicants.
  - Update statuses (`pending`, `accepted`, `rejected`) with a single click.
- 📊 **Recruiter Dashboard**
  - Monitor active jobs, view applicants per post, and analyze application data visually.
---

### 🌐 Platform-Wide Features

- 🔒 **JWT Authentication & Protected Routes**
  - Only authenticated users can access core features.
  - Role-based access ensures recruiters and students have distinct privileges.
  
- ⚙️ **Redux-Powered Global State**
  - Centralized management for user authentication, company info, job listings, and application states.
  - Reduces redundant API calls and ensures instant UI updates.

- 🎨 **Responsive UI & Modern Design**
  - Built with React, Tailwind CSS, and component-based design for a clean and adaptive interface.
  - Fully responsive layout optimized for mobile, tablet, and desktop.

- 📡 **Real-Time API Integration**
  - Axios handles all backend interactions (login, register, jobs, applications) with proper error handling.
  - Loading and success states reflected dynamically via Redux slices.

- 🗂️ **File Upload & Storage**
  - Profile photos, resumes, and company logos are uploaded and stored securely using Multer middleware.

- 🧠 **Smart Data Flow**
  - MongoDB + Mongoose relationships allow recruiters to view company-linked jobs and applicants with population queries.

- 📅 **Timestamps for All Activities**
  - Each user, job, and application is timestamped for transparent activity tracking.

- 🧩 **Extensible Backend**
  - Easy to integrate new features such as analytics, recommendations, or notifications.

---

### 💬 Upcoming Enhancements
- 📧 **Email Notifications** – Automated emails for job status updates and new postings.
- 📈 **Analytics Dashboard** – Real-time insights into recruiter performance and job engagement.
- 💬 **Messaging System** – In-app communication between applicants and recruiters.
- 🌍 **AI-Powered Matching** – Smart recommendations based on profile data.
- 🔔 **Push Notifications** – Alerts for job matches and recruiter responses.
- 🧠 **Admin Panel** – Platform-level control for monitoring and management.

---

💡 *HireVerse combines modern frontend interactivity with robust backend logic — creating a production-ready recruitment ecosystem powered by the MERN stack.*


## 🧩 Core Models (MongoDB + Mongoose)

### **User Model**
- Handles both student and recruiter roles.
- Stores profile info, skills, resume links, and associated company (for recruiters).

### **Company Model**
- Represents companies created by recruiters.
- Includes name, description, location, website, logo, and creator reference.

### **Job Model**
- Stores job details: title, description, requirements, salary, experience level, job type, location, and open positions.
- References the company and recruiter who posted it.
- Maintains a list of all applications received.

### **Application Model**
- Connects a job with an applicant.
- Tracks the application status (`pending`, `accepted`, or `rejected`).

---

## 🛣️ API Routes Overview

### **User Routes**
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/v1/user/register` | POST | Register new user with optional profile photo |
| `/api/v1/user/login` | POST | Login and get token |
| `/api/v1/user/logout` | GET | Logout user |
| `/api/v1/user/profile/update` | POST | Update profile (bio, skills, resume, photo) |

### **Company Routes**
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/v1/company/register` | POST | Register a new company |
| `/api/v1/company/get` | GET | Get all companies for the logged-in recruiter |
| `/api/v1/company/get/:id` | GET | Get specific company details |
| `/api/v1/company/update/:id` | PUT | Update company details (with logo upload) |

### **Job Routes**
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/v1/job/post` | POST | Post a new job (recruiter only) |
| `/api/v1/job/get` | GET | Get all available jobs |
| `/api/v1/job/getadminjobs` | GET | Get all jobs posted by the recruiter |
| `/api/v1/job/get/:id` | GET | Get detailed info for a specific job |

### **Application Routes**
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/v1/application/apply/:id` | GET | Apply for a specific job |
| `/api/v1/application/get` | GET | Get all jobs applied by the user |
| `/api/v1/application/:id/applicants` | GET | Get all applicants for a specific job |
| `/api/v1/application/status/:id/update` | POST | Update application status (recruiter only) |

---

## ⚙️ Tech Stack

**Frontend:** React.js (planned or connected UI)  
**Backend:** Node.js + Express.js  
**Database:** MongoDB + Mongoose, Cloudinary (Cloud Storage for storing resumes + profile photos + logos)  
**Authentication:** JWT  
**File Uploads:** Multer  
**Middleware:** Custom authentication + role-based guards

---

## 🧠 System Design Highlights

- **Modular architecture:** Separated controllers, models, and routes for maintainability.
- **Scalable data design:** Relational references between User → Company → Job → Application.
- **Optimized queries:** Using population (`populate()`) to fetch related data efficiently.
- **RESTful API design:** Clean, descriptive endpoints following industry standards.

---

## 🧑‍💻 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/ujjawalptdr/hireverse.git

# Navigate to the project
cd hireverse

# Install dependencies
npm install

# Set environment variables (.env)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

# Run the server
npm run build

# OR -> seperately run frontend and backend through running this command for both
npm run dev
