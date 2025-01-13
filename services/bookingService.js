const { rooms, bookings } = require('../models/bookingModel');

const bookRoomService = (name, email, contact, checkIn, checkOut) => {
  const availableRoom = rooms.find((room) => !room.isBooked);
  if (!availableRoom) {
    return { status: 400, data: { message: 'No rooms available' } };
  }

  const booking = {
    roomNumber: availableRoom.roomNumber,
    name,
    email,
    contact,
    checkIn,
    checkOut,
  };

  availableRoom.isBooked = true;
  bookings.push(booking);

  return { status: 200, data: booking };
};

const viewBookingService = (email) => {
    const userBookings = bookings.filter((b) => b.email === email); // Get all bookings for the email
    if (userBookings.length === 0) {
      return { status: 404, data: { message: 'No bookings found for this email' } };
    }
    return { status: 200, data: userBookings }; // Return all bookings
  };
  

const viewAllGuestsService = () => {
  return bookings.map((b) => ({
    name: b.name,
    roomNumber: b.roomNumber,
  }));
};

const cancelBookingService = (email, roomNumber) => {
  const index = bookings.findIndex((b) => b.email === email && b.roomNumber === roomNumber);
  if (index === -1) {
    return { status: 404, data: { message: 'Booking not found' } };
  }

  const [removedBooking] = bookings.splice(index, 1);
  const room = rooms.find((r) => r.roomNumber === removedBooking.roomNumber);
  room.isBooked = false;

  return { status: 200, data: { message: 'Booking canceled successfully' } };
};

const modifyBookingService = (email, checkIn, checkOut) => {
    const booking = bookings.find((b) => b.email === email);
    if (!booking) {
      return { status: 404, data: { message: 'Booking not found' } };
    }
  
    booking.checkIn = checkIn;
    booking.checkOut = checkOut;
  
    return { status: 200, data: booking };
  };
  

module.exports = {
  bookRoomService,
  viewBookingService,
  viewAllGuestsService,
  cancelBookingService,
  modifyBookingService,
};
