const {server} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server',()=>{
  it('Should return type',async ()=>{
    const query = 'Murad';
 const response = await mockRequest.get(`/name?Name=${query}`);
 expect(response.body.Name).toEqual(query);
 expect(response.status).toBe(200);
  });

  it('handels bad requstes',async()=>{
    const response= await mockRequest.get('/fos');
    expect(response.status).toEqual(500);
});

it('handels errors',async()=>{
    const response=await mockRequest.get('/bad');
    expect(response.status).toEqual(500);
});


})