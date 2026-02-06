import request from 'supertest';
import { app } from '../server.js';

describe('Order API Tests', () => {
  test('POST /api/orders should create a new order', async () => {
    const orderData = {
      items: [{
        name: 'Test Pizza',
        price: 299,
        quantity: 2
      }],
      customer: {
        name: 'Test Customer',
        address: 'Test Address',
        phone: '9876543210'
      },
      totalAmount: 598
    };

    const response = await request(app)
      .post('/api/orders')
      .send(orderData)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.orderId).toBeDefined();
  });

  test('POST /api/orders should fail with empty cart', async () => {
    const invalidOrder = {
      items: [],
      customer: {
        name: 'Test',
        address: 'Test',
        phone: '123'
      },
      totalAmount: 0
    };

    const response = await request(app)
      .post('/api/orders')
      .send(invalidOrder)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain('Cart is empty');
  });
});