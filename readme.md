--readme--
Day-1
How use IAM 
User
Roles 
Polcies 
Api Keys 
How the Groups 
How the Assignments 

VPC : 
VPC 
Subnect 
Routing Table 
Internet Gateway 
Security Group 
CIDR blocks 

Setup Evironments 
AWS Cli Configured 
API Keys integrated 

Day 2 : 
What DBaaS 
Create database 
DB Subnet groups 
Backup Up and Restore in S3 
NoSQL Database 
DynamoDB -> COlumnar Database 
DocumentDB -> MongodB Version on the cloud
postgres --> aws_s3 extension 
percona db --> import the database from s3 

Day-3 :- 
Serverless Computing
S3 + Route 53 + Lambda + DynamoDB + CloudWatch + EMR = Full functional WebApplication 
WebServer:
Route 53 : DNS : 
Dynamo DB : DataStore 
Lambda : Business Logic 
CloudWatch : Logs , metrics and Dashboard 
EMR : Anlytics 

EC2 and you can install your own machines :- (Administrion,)
XaaS 
----------------------------------------------------------------------------------------------------------------
Foll0wing Permission 
S3FullAccess
CloudWatchFullAccess 
DynamoDBFullAccess
DocDBFullAccess 



The Lambda Code :- 
exports.handler = async (event) => {
    const responseData = {
        empid : 1000,
        empname : "nilesh"
    } 
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(responseData),
        
    };
    return response;
};


## to invoke the lambda from the command prompt 
aws lambda  invoke  --function-name <yourfunctiom>  <outfile>


REST API 
GET 
PUT 
POST 
DELETE
HEAD 
OPTIONS 

Depending up what you wish to do you will be doing the rest api activity : 
PUT -update 
GET -Fetch the information 
POST -> Create 
HEAD => Check 
DELETE -> Deletion 

Resource is like a url 
http://xxxxxxx/




# using the sdk s
-- The SDK is the aws sdk and it is available for almost all the programming language -- 

1.  Created a folder // initialize if reuquired 
2.  i added the sdk  ## npm install aws-sdk 
3.  I open my editor and write  the code 
4.  var AWS = require("aws-sdk")
    # the sdk is one which installed at the top 
5.  The sdk is working becuase you have a set profile aws.configure done in your system 
6.  choose the service you want to interact 
    var ddb = new AWS.DynamoDB({
        region : 'us-east-1'
    })
7.  The implementation requires you put a item 
    the item has  the tableName and the Item defintion 
   var data =  {
       TableName : '' , 
       Item : {
          'COLNAME' : {
              'type' : 'value'
          },
          'COLNAME' : {
              'type' : 'value'
          },
          'COLNAME' : {
              'type' : 'value'
          },
          'COLNAME' : {
              'type' : 'value'
          },
       }
    }
    dynamoDB.putItem(data, (err, response)=>{
        if(err)
            console.log()
        else
            console.log()
    });

You can simply run this code 
    ctrl + ~ -=> a prompt will open (Provided you are using a vscode)

node yourfile.js 

### amazon mq (Active MQ )
Its a broker and has support 
a) JMS 
b) amqp 
c) mqtt 
d) ws 

1) you can use it for point to point integration (Queues)
2) you can use it for pub/subscribe usign the broadcast 
3) Build you own mq against using the amazon mq 

AWS MQ is a managed Service *like the aws RDS 
a) Backup / Snaphop 
b) HA 
c) Updates and configuration 
d) Monitoring and cloudwatch support 

SQS the sqs have feature -> its not a Managed service : Its pure service SDK 

### difference in EBS and EFS 
# EBS is known as Elastic block Storage : Disk Attaced to you system of vm 
# EFS is not a on the same box efs is a Elastic FIles System (NFS):- 
    NFS 4.1 and Above and windows Still does not support NFS with 4.1 hence using this 
    would be possible but would require custom drivers 
EFS // Network Storage --> NoLimit  
EBS // Local Storage --> Limit



There are various ways to get connected to the mq Broker 
the promient and required by the parties in the market is th MQTT (Messaging and Queing Telemetry Transport)
Low Level messaging generally Support ESPIOT's or   
























































AWS Lambda 
BeanStalk 
API 

