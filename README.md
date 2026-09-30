# Muhammad Hassan Zahid - Professional Portfolio

A premium, modern, and high-performance software engineering portfolio designed for showcasing technical expertise, core CS concepts, academic qualifications, and professional projects.

## 🚀 Key Features

- **Premium Modern Design:** Anchored in a sleek high-contrast layout, featuring beautiful floating gradient background orbs, glassmorphism card styling, responsive design, and smooth transitions.
- **Interactive Qualifications Tab:** Showcases academic background from UMT Lahore, software development credentials, and key CS coursework (DSA, OOP, Databases).
- **Simulated Dev CLI Console:** A live-status terminal overlay inside the navigation bar representing real-time system/developer configuration details.
- **Protected Admin Messages Portal:** A secure dashboard to view and delete contact messages stored inside a SQLite database (`portfolio_sqlite.db` for local testing) or JSON state (for Vercel serverless functions).
- **Automated SMTP Mailer:** Delivers immediate email notifications to the owner on receiving contact messages using Nodemailer.

---

## 🛠️ Technology Stack

### Frontend
- **React.js (v18)** - Core UI component library
- **Vite** - High-speed next-generation bundler
- **Tailwind CSS** - Modern Utility-first styling framework
- **Lucide React** - High-quality modern icon pack

### Backend & Database
- **Express.js (Node.js)** - Server environment
- **SQLite3 / JSON Storage** - Flexible relational file-based storage
- **Nodemailer** - Mail delivery engine
- **Vercel Serverless Functions** - API endpoints for cloud deployment

---

## ⚙️ Project Structure

```bash
├── api/                      # Vercel serverless API handlers
│   ├── admin/
│   │   └── login.js          # Admin login verification API
│   ├── _messages.js          # Messages handler helper for serverless storage
│   ├── contact.js            # Contact form mailer & storage handler
│   └── messages.js           # Messages viewer & deleter handler
├── public/                   # Static browser assets
│   └── resume.html           # Downloadable professional resume
├── src/                      # React application codebase
│   ├── components/           # Modular JSX portfolio sections
│   │   ├── AboutEducation.jsx
│   │   ├── AdminModal.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── SkillsProjects.jsx
│   ├── App.jsx               # Main application hub
│   ├── index.css             # Design system styling & background animations
│   └── main.jsx              # React initialization
├── server.js                 # Local Node.js Express server backend
├── vercel.json               # Vercel redirection rules configuration
├── tailwind.config.js        # Custom theme & styling configuration
└── package.json              # Dependencies & build scripts configuration
```

---

## 🏃 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v16+) installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory by copying `.env.example`:
```bash
cp .env.example .env
```
Fill in the configuration details:
```env
PORT=5000
ADMIN_PASSWORD=your_admin_portal_password
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### 4. Running the Project Locally
You will need two terminals running to test locally:

- **Run Frontend Dev Server:**
  ```bash
  npm run dev
  ```
  The client application will run on `http://localhost:3000`.

- **Run Local Node.js Backend:**
  ```bash
  npm run start
  ```
  The Express server will launch on `http://localhost:5000` and initialize `portfolio_sqlite.db`.

---

## ☁️ Vercel Deployment

This project is pre-configured to deploy seamlessly on Vercel with zero cold startup requirements.

1. **Push your code to GitHub.** (Ensure `.env` and `portfolio_sqlite.db` are in your `.gitignore` and not uploaded).
2. **Import the repository into Vercel.**
3. Add the following **Environment Variables** in Vercel project settings:
   - `ADMIN_PASSWORD` (e.g., `your_secure_password`)
   - `EMAIL_USER` (e.g., `dev.hassanzahid@gmail.com`)
   - `EMAIL_PASS` (Your Gmail App Password)
4. Deploy! Vercel will automatically read `vercel.json` rewrites and use the serverless functions inside `/api` to process backend actions.
