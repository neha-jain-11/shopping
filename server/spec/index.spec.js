const request = require('supertest');
const app = require('../index');
describe('test', () => {
  it('one', () => {
    expect(2 + 2).toEqual(4);
  })
  it('get to test1', async () => {
    const res = await request(app).get('/api/test1');
    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({ test: "no" });
  })
  it('get to test2 - header', async () => {
    const res = await request(app).get('/api/test2');
    expect(res.statusCode).toEqual(200);
    expect(res.headers['custom-header']).toEqual('test-head');
    expect(res.headers['custom-header1']).toEqual('test-head1');
    expect(res.body).toEqual({ test: "yes" });
  })
  it('post to test1 with param as 1', async () => {
    const res = await request(app).
      post('/api/test1')
      .send({ param: 1 });
    // console.log(res);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('1 - test1');
  })
  it('post to test1 with param as 2', async () => {
    const res = await request(app).post('/api/test1')
      .set('custom-header', 'test')
      .send({ param: 2 });

    expect(res.statusCode).toEqual(201);
    expect(res.text).toEqual('2');
  })
});