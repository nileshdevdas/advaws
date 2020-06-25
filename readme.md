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























AWS Lambda 
BeanStalk 
API 

