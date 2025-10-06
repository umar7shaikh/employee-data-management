const request = require('supertest');
const app = require('../src/server');

describe('Employee API Endpoints', () => {
  let employeeId;

  it('GET /api/employees - should return empty array', async () => {
    const res = await request(app).get('/api/employees');
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/employees - should create employee', async () => {
    const res = await request(app)
      .post('/api/employees')
      .send({ name: "Test User", email: "test@example.com", position: "Tester" });
    expect(res.body).toHaveProperty('id');
    employeeId = res.body.id;
  });

  it('PUT /api/employees/:id - should update employee', async () => {
    const res = await request(app)
      .put(`/api/employees/${employeeId}`)
      .send({ name: "Updated User", email: "updated@example.com", position: "QA" });
    expect(res.body.name).toBe("Updated User");
  });

  it('DELETE /api/employees/:id - should delete employee', async () => {
    const res = await request(app).delete(`/api/employees/${employeeId}`);
    expect(res.body).toHaveProperty('message', 'Employee deleted');
  });
});
