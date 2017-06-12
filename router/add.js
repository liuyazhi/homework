/**
 * Created by Administrator on 2017/6/12.
 */
var express=require('express'),
    router=express.Router(),
    mysql=require('mysql'),
    connection=require('../config/configmysql.js')(mysql);
router.post('/add',function(req,res){
    var title=req.body.title,
        content=req.body.content;
    console.log(title);
    console.log(content);
    connection.query('insert into blog(title,content) values("'+title+'","'+content+'")',function(err,data){
        console.log(data);
        res.send({code:'0',msg:'添加成功'})
    })
});
module.exports=router;