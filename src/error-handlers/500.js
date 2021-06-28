'use strict';
// module.exports=(err,req,res,next)=>{
//     const error =err.message ? err.mesage : err;
//     res.status(500).json({error});
// }
module.exports=(error,req,res,next)=>{
    res.status(500).json({error:'somthing wrong'});
    };