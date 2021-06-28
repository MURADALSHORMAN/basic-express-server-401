'use strict';
const express= require('express');
const notFoundHandler=require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator =require('./middleware/validator');
const app=express();
app.use(express.json());
app.use(logger);
app.use(validator);


app.get('/',(req,res)=>{
    res.send('server working');
})


/// get http://localhost:3001/name?Name='string'
app.get('/name',(req,res)=>{
    const output={Name:req.query.Name};
    res.json(output);
})


app.get('/bad',(res,req)=>{
    throw new Error('Error');
})

app.use('*',notFoundHandler);
app.use(errorHandler);
module.exports={
    server:app,
    start:(port)=>{
        app.listen(port,()=>console.log(`server working on ${port}`));
    }
}










