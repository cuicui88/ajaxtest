var http=require("http");
var server=http.createServer(function(req,res){
    if(req.url!=="/favicon.ico"){
        res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost:8003"});
        res.write("8003!");
    }
    res.end();
});
server.listen(1337,"localhost");