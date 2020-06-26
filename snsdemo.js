var AWS = require("aws-sdk");
var SNS = new AWS.SNS({
    region: 'us-east-1'
});
SNS.publish({
    Message : 'Hello from AWS SDK ',
    TopicArn: 'arn:aws:sns:us-east-1:457362930747:nileshalerts'
}, (err, response) => {
    if (err)
        console.log("Error Occured ", err);
    else
        console.log("Successfully Sent Message");
});