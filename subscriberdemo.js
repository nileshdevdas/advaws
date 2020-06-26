var mqtt = require('mqtt');
var broker = mqtt.connect('mqtts://b-57159f25-a698-437e-8583-70d4556c8c2f-1.mq.us-east-1.amazonaws.com:8883', {
    username: 'admin',
    password: 'wwwamazonmqcom'
});
broker.on('connect', () => {
    console.log("Connected Successfull.........");
    broker.subscribe('nilesh.news.events');
});

broker.on("message" , (topic, message)=>{
    console.log("You Got  A Message on " , topic);
    console.log("The message is ", message.toString());
});
