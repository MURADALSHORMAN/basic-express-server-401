'use strict';
const validatorMiddleware = require('../src/middleware/validator');


describe('validator Middleware',()=>{

   
    const req = {query:{Name:'string'}};
    const res = {};
    const next = jest.fn()
  
    
  
    it('moves to the next middleware',()=>{
        validatorMiddleware(req,res,next);
      expect(next).toHaveBeenCalledWith();
    });
  })