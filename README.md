# hotelBookingApplication

Hotel Room Booking System
A simple and efficient Node.js-based hotel room booking system built with Express.js, in-memory data management, and robust API validation. This project demonstrates core backend concepts such as routing, validation, and error handling.

Features
Book a Room: Reserve a room with customer details.
View Bookings: Fetch all bookings for a specific email.
Modify Bookings: Update check-in and check-out dates for an existing booking.
Cancel Bookings: Delete a booking by email and room number.
List Guests: View all guests with their assigned room numbers.
Technologies Used
Node.js: Runtime for building the server.
Express.js: Framework for handling routing and middleware.
express-validator: Middleware for validating API requests.
In-Memory Storage: Temporary storage for room and booking data.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/hotel-room-booking-system.git
cd hotel-room-booking-system
Install Dependencies:

bash
Copy code
npm install
Run the Application:

bash
Copy code
npm start
Access the API:

Server runs on: http://localhost:3000.
API Endpoints
HTTP Method	Endpoint	Description	Request Body Example
POST	/api/bookRoom	Book a room	{ "name": "John Doe", "email": "john.doe@example.com", "contact": "1234567890", "checkIn": "2025-01-15", "checkOut": "2025-01-20" }
GET	/api/viewBooking/:email	View all bookings by email	N/A
GET	/api/viewAllGuests	List all guests	N/A
DELETE	/api/cancelBooking	Cancel a booking	{ "email": "john.doe@example.com", "roomNumber": 1 }
PUT	/api/modifyBooking	Modify booking details	{ "email": "john.doe@example.com", "checkIn": "2025-01-18", "checkOut": "2025-01-22" }
Example Workflow
Book a Room:

Request: POST /api/bookRoom
Example Response:
json
Copy code
{
  "roomNumber": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "contact": "1234567890",
  "checkIn": "2025-01-15",
  "checkOut": "2025-01-20"
}
View Bookings:

Request: GET /api/viewBooking/john.doe@example.com
Example Response:
json
Copy code
[
  {
    "roomNumber": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "checkIn": "2025-01-15",
    "checkOut": "2025-01-20"
  }
]
Directory Structure
bash
Copy code
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
Future Enhancements
Database Integration: Replace in-memory storage with MongoDB or PostgreSQL.
Authentication: Add JWT-based authentication for API security.
Pagination: Implement pagination for large data responses.
License
This project is licensed under the MIT License. See the LICENSE file for details.

