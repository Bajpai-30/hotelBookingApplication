const { app, server } = require('../app'); // Ensure server is properly imported to close after tests
const request = require('supertest');

beforeEach(async () => {
  // Create a booking before each test for consistency
  await request(app).post('/api/bookRoom').send({
    name: 'John Doe',
    email: 'johndoe@example.com',
    contact: '1234567890',
    checkIn: '2025-01-10',
    checkOut: '2025-01-15',
  });
});

afterAll(() => {
  // Close the server after all tests to avoid open handles
  server.close();
});

describe('Hotel Room Booking System APIs', () => {
  test('Book a room successfully', async () => {
    const response = await request(app).post('/api/bookRoom').send({
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      contact: '0987654321',
      checkIn: '2025-02-01',
      checkOut: '2025-02-05',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('roomNumber');
  });

  test('Retrieve booking details by email', async () => {
    const response = await request(app).get('/api/viewBooking/johndoe@example.com');
    expect(response.status).toBe(200);
    expect(response.body.email).toBe('johndoe@example.com');
  });

  test('Retrieve all guests currently staying in the hotel', async () => {
    const response = await request(app).get('/api/viewAllGuests');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('Cancel a booking successfully', async () => {
    const response = await request(app).delete('/api/cancelBooking').send({
      email: 'johndoe@example.com',
      roomNumber: 1,
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Booking canceled successfully');
  });

  test('Modify booking details successfully', async () => {
    const response = await request(app).put('/api/modifyBooking').send({
      email: 'johndoe@example.com', // Ensure email matches the one created in beforeEach
      checkIn: '2025-01-12',
      checkOut: '2025-01-18',
    });

    expect(response.status).toBe(200); // Expect the API to succeed
    expect(response.body.checkIn).toBe('2025-01-12'); // Expect the check-in date to be updated
    expect(response.body.checkOut).toBe('2025-01-18'); // Expect the check-out date to be updated
  });
});
