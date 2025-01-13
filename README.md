🏨 Hotel Room Booking System
A simple and efficient Node.js-based hotel room booking system. Built with Express.js, it features robust API validation, in-memory data management, and an intuitive structure for easy customization.


🚀 Features
Book a Room: Easily reserve a room by providing customer details.
View Bookings: Retrieve all bookings for a specific email address.
Modify Bookings: Update check-in and check-out dates for an existing booking.
Cancel Bookings: Delete a booking using email and room number.
List Guests: Display all guests with their assigned room numbers.
🛠️ Technologies Used
Node.js: Runtime environment for JavaScript.
Express.js: Fast and lightweight web framework.
express-validator: Middleware for validating API requests.
In-Memory Storage: Temporary storage for managing rooms and bookings.

📦 Installation
Clone the Repository:
git clone https://github.com/yourusername/hotel-room-booking-system.git
cd hotel-room-booking-system

Install Dependencies:
npm install

Run the Application:
npm start

Access the API:
Base URL: http://localhost:3000

🗂️ Directory Structure
hotelRoomBookingSystem/
│
├── controllers/         # Business logic for API routes
│   └── bookingController.js
│
├── models/              # In-memory data storage
│   └── bookingModel.js
│
├── routes/              # Route definitions
│   └── bookingRoutes.js
│
├── services/            # Core service layer
│   └── bookingService.js
│
├── middlewares/         # Validation logic
│   └── validation.js
│
├── tests/               # Test cases
│   └── bookingController.test.js
│
├── app.js               # Entry point for the server
├── package.json         # Project metadata and dependencies
├── README.md            # Documentation
└── .gitignore           # Ignored files
