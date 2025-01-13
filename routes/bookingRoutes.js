const express = require('express');
const bookingValidation = require('../middlewares/validation');
const {
  bookRoom,
  viewBooking,
  viewAllGuests,
  cancelBooking,
  modifyBooking,
} = require('../controllers/bookingController');

const router = express.Router();

router.post('/bookRoom', bookingValidation.bookRoom, bookRoom);

router.get('/viewBooking/:email', bookingValidation.viewBooking, viewBooking);

router.get('/viewAllGuests', viewAllGuests);

router.delete('/cancelBooking', bookingValidation.cancelBooking, cancelBooking);

router.put('/modifyBooking', bookingValidation.modifyBooking, modifyBooking);

module.exports = router;
