'use strict';
module.exports = (req, res, next) => {

    console.log('__request__', req.method, req.path);
    let inputValue = req.query.Name;



    if (typeof inputValue == 'string') {
        req.Name = req.query.Name;
        next();
    } 
    else if (req.path=='/'){
        next();
    }
    else {
        next('error');
    }
    

}