var redis = require("redis");

var client = redis.createClient("6379", "nileshcache.0dph9w.ng.0001.use1.cache.amazonaws.com");
client.on("connect", function(){
    console.log("connected ");
    client.set("sessionid" , "sessionid");
});
