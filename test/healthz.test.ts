import request from 'supertest';
import { createApp } from '../src/app';

describe('GET /healthz', () => {
  const app = createApp();

  it('should return 200 OK with status ok', async () => {
    const response = await request(app).get('/healthz');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  it('should return JSON content type', async () => {
    const response = await request(app).get('/healthz');
    
    expect(response.headers['content-type']).toMatch(/json/);
  });
});
