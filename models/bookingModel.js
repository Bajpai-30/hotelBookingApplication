// In-memory data
const rooms = Array.from({ length: 10 }, (_, i) => ({ roomNumber: i + 1, isBooked: false }));
const bookings = [];

module.exports = { rooms, bookings };
