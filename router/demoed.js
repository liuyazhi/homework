var express=require('express'),
    router=express.Router(),
    mysql=require('mysql'),
    connection=require('../config/configmysql.js')(mysql);
router.get('/demoed',function(req,res){
    connection.query('select * from blog',function(err,data){
        if(data.length>0) {
            res.send({code:1,msg:data})
        }else{
            res.send({code:0})
        }
    })
});
module.exports=router;