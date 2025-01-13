const { body, param } = require('express-validator');

const bookingValidation = {
  bookRoom: [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('contact').isMobilePhone().withMessage('Invalid contact number'),
    body('checkIn').isISO8601().withMessage('Invalid check-in date'),
    body('checkOut').isISO8601().withMessage('Invalid check-out date'),
  ],
  viewBooking: [
    param('email').isEmail().withMessage('Invalid email'),
  ],
  cancelBooking: [
    body('email').isEmail().withMessage('Invalid email'),
    body('roomNumber').isInt({ min: 1 }).withMessage('Invalid room number'),
  ],
  modifyBooking: [
    body('email').isEmail().withMessage('Invalid email'),
    body('checkIn').isISO8601().withMessage('Invalid check-in date'),
    body('checkOut').isISO8601().withMessage('Invalid check-out date'),
  ],
};

module.exports = bookingValidation;
