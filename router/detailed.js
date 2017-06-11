var express=require('express'),
    router=express.Router(),
    mysql=require('mysql'),
    connection=require('../config/configmysql.js')(mysql);
router.get('/detailed',function(req,res){
    var id=req.query.id;
    connection.query("select * from blog where No='"+id+"'",function(err,data){
        if(data.length>0) {
            res.send({code:1,msg:data})
        }else{
            res.send({code:0})
        }
    })
});
module.exports=router;