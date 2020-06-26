var AWS = require("aws-sdk")

function addDynamoRecord(reqid, reqtype, reqdata) {
    var ddb = new AWS.DynamoDB({
        region: 'us-east-1'
    });
    ddb.putItem({
        TableName: 'NILESH_REQUESTS_LOG',
        Item: {
            'requestid': {
                'S': reqid
            },
            'requesttype': {
                'S': reqtype
            },
            'requestdata': {
                'S': reqdata
            }
        }
    }, (err, response) => {
        if (err) {
            console.log("Error Occured While Putting the Item ", err);
        } else {
            console.log("Successfully put the item to the table");
        }
    });
}
addDynamoRecord('1', 'HTTP_GET', 'BLAH BLAH')
// ctrl + ~
