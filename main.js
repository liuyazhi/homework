var express=require('express'),
	app=express(),
	ejs=require('ejs'),
	bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(express.static(__dirname+'/static'));

require('./config/configrouter.js')(app);

app.listen(3000,function(){
	console.log('listen 3000...')
});