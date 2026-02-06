import request from 'supertest';
import { app } from '../server.js';

describe('Menu API Tests', () => {
  test('GET /api/menu should return menu items with success status', async () => {
    const response = await request(app)
      .get('/api/menu')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});