## Food Order App - Full Stack Assessment
🚀 Live Demo
Frontend: [https://food-order-frontend.vercel.app](https://food-order-app-dusky-ten.vercel.app/)

Backend API: [https://food-order-backend.vercel.app](https://food-order-backend-woad.vercel.app/api/)

📋 Project Overview
A full-stack food delivery order management system built for assessment purposes. Users can browse menu, add items to cart, place orders, and track order status in real-time.

✨ Features
🍽️ Menu Display
Browse food items with images, descriptions, and prices

Responsive grid layout

Real data from MongoDB database

🛒 Order Placement
Add/remove items from cart

Adjust item quantities

Calculate total price automatically

Secure checkout with customer details

📊 Order Status Tracking
Real-time order status updates

Visual timeline with progress indicator

Automatic status progression simulation

Frontend polling for live updates

🔧 Technical Features
RESTful API with Express.js

MongoDB database with Mongoose ODM

React Context for state management

Test-driven development (TDD)

Input validation and error handling

🏗️ Tech Stack
Frontend
Next.js 14 (App Router)

React 18 with Hooks

Tailwind CSS for styling

Axios for API calls

React Context API for state management

Backend
Node.js with Express.js

MongoDB with Mongoose

CORS for cross-origin requests

dotenv for environment variables

Deployment
Vercel for frontend hosting

Vercel for backend serverless functions

MongoDB Atlas for cloud database

📁 Project Structure
text
food-order-app/
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   │   ├── page.jsx        # Menu page
│   │   ├── cart/page.jsx   # Cart page
│   │   ├── checkout/page.jsx # Checkout page
│   │   └── order/[id]/page.jsx # Order tracking
│   ├── components/         # Reusable components
│   ├── context/           # React Context (CartContext)
│   ├── lib/              # Utilities (API client)
│   └── public/           # Static assets
│
├── backend/               # Express.js API
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── tests/           # Test files
│   ├── server.js        # Main server file
│   └── seedMenu.js      # Database seeder
│
└── README.md            # This file
🚀 Getting Started
Prerequisites
Node.js 18+

MongoDB Atlas account

Git

Installation
Clone the repository

bash
git clone <repository-url>
cd food-order-app
Setup Backend

bash
cd backend
npm install
cp .env.example .env
# Add your MongoDB URI to .env
npm run dev
Setup Frontend

bash
cd frontend
npm install
npm run dev
Seed Database

bash
cd backend
node seedMenu.js
📡 API Endpoints
Menu
GET /api/menu - Get all menu items

Orders
POST /api/orders - Create new order

GET /api/orders/:id - Get order by ID

Order Status Flow
Order Received

Preparing

Out for Delivery

Delivered

🧪 Testing
The project follows Test-Driven Development (TDD) approach:

Backend Tests
bash
cd backend
npm test
Tests cover:

API endpoint responses

Order creation validation

Error handling

Database operations

Manual Testing
Run the test suite:

bash
cd backend
node test-simple.js
🎥 Loom Video
Watch the walkthrough video covering:

Project architecture and design decisions

Code structure and organization

Feature demonstrations

Testing approach

Challenges and solutions

🤖 AI Tools Usage
During development, I leveraged AI tools for:

Code generation: Initial boilerplate and component structure

Debugging: Identifying and fixing MongoDB connection issues

Testing: Generating test cases and edge scenarios

Documentation: Creating comprehensive README and comments

🏆 Assessment Criteria Met
✅ Problem-Solving Approach
Modular architecture with clear separation of concerns

Scalable folder structure

Error handling at multiple levels

✅ Code Quality
Clean, maintainable code with consistent formatting

Comprehensive test coverage

Proper validation and error messages

✅ UI/UX
Simple, intuitive user interface

Responsive design

Smooth user flow from menu to order tracking

✅ Back-End
Well-structured REST API

Secure input validation

Real-time status simulation

Proper database modeling

✅ Use of AI
Effective utilization for code generation and debugging

Enhanced productivity while maintaining code quality

Assisted in test creation and documentation

🔧 Challenges & Solutions
Challenge 1: Real-time Status Updates
Solution: Implemented backend simulation with setInterval and frontend polling every 3 seconds.

Challenge 2: MongoDB Connection Issues
Solution: Updated connection string and removed deprecated options for compatibility.

Challenge 3: CORS Configuration
Solution: Implemented dynamic CORS configuration for both local development and production.

Challenge 4: State Management
Solution: Used React Context API for cart state with proper provider setup.

📈 Future Enhancements
User Authentication - Login/registration system

Payment Integration - Stripe or Razorpay

Admin Dashboard - Manage orders and menu

WebSocket - True real-time updates

Email Notifications - Order confirmation emails

Ratings & Reviews - Customer feedback system

📄 License
This project is created for assessment purposes.

👨‍💻 Author
Sunitha HR

GitHub: @sunithahr176

LinkedIn: Sunitha HR

Assessment Submission: This project demonstrates full-stack development skills with focus on clean architecture, testing, and deployment.

Quick Start Commands
bash
# Development
cd backend && npm run dev  # Start backend on port 5000
cd frontend && npm run dev # Start frontend on port 3000

# Testing
cd backend && npm test     # Run backend tests

# Deployment
vercel --prod              # Deploy to Vercel


