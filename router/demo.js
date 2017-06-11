var express=require('express'),
    router=express.Router();

router.get('/demo',function(req,res){
    res.render('demo')
});
module.exports=router;