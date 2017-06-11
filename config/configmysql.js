/**
 * Created by Administrator on 2017/3/28.
 */
module.exports=function(mysql){
    var connection=mysql.createConnection({
        'host':'localhost',
        'user':'root',
        'password':'1234',
        'port':3306,
        'database':'1503a'
    });

    connection.connect();
    return connection;
};