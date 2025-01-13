const { validationResult } = require('express-validator');
const {
  bookRoomService,
  viewBookingService,
  viewAllGuestsService,
  cancelBookingService,
  modifyBookingService,
} = require('../services/bookingService');

const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};

exports.bookRoom = (req, res) => {
  if (handleValidationErrors(req, res)) return;

  const { name, email, contact, checkIn, checkOut } = req.body;
  const result = bookRoomService(name, email, contact, checkIn, checkOut);
  res.status(result.status).json(result.data);
};

exports.viewBooking = (req, res) => {
  if (handleValidationErrors(req, res)) return;

  const email = req.params.email;
  const result = viewBookingService(email);
  res.status(result.status).json(result.data);
};

exports.viewAllGuests = (req, res) => {
  const result = viewAllGuestsService();
  res.status(200).json(result);
};

exports.cancelBooking = (req, res) => {
  if (handleValidationErrors(req, res)) return;

  const { email, roomNumber } = req.body;
  const result = cancelBookingService(email, roomNumber);
  res.status(result.status).json(result.data);
};

exports.modifyBooking = (req, res) => {
  if (handleValidationErrors(req, res)) return;

  const { email, checkIn, checkOut } = req.body;
  const result = modifyBookingService(email, checkIn, checkOut);
  res.status(result.status).json(result.data);
};
