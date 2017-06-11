var express=require('express'),
    router=express.Router();

router.get('/detail',function(req,res){
    res.render('detail')
});
module.exports=router;