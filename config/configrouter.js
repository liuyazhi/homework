/**
 * Created by Administrator on 2017/3/28.
 */
var demo=require('../router/demo'),
    detail=require('../router/detail'),
    demoed=require('../router/demoed'),
    detailed=require('../router/detailed');

module.exports=function(app){
    app.get('/demo',demo);
    app.get('/detail',detail);
    app.get('/demoed',demoed);
    app.get('/detailed',detailed);
};