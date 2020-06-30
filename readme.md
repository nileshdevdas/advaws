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


## Terraform ## 
What is terraf form 
Infrastructure as Code :- 
a) Ansible 
b) Chef 
c) puppet 
d) saltstack 
Terraform is the product from HashiCorp : Hashimoto
Its Multi Cloud Provider for the IaaC 
Google 
AWS 
Azure 
VMWARE 

The beaut of terraform 
1. State management (it manages and stores you state in a local repository)
2. Plugin driven (100 of cloud provider)
3. Light and Has Connected repository 
4. Plugin and Module Registry --> EC2 with complex configuration -> 
                    Ready Made module + Parameters --> 

























1. Kubernetes ? 
2. EKS (Elastic Kubernetes service)
3. kubectl (Control plane client)
4. ECS / EKS 
-----------------------------------------------
Docker is meant to be a build ship and run implementation 
You code what you build --> Image -> Ship the same image and What SHip is 
what you run on the production 

Image --> DOcker Container --> Pod --> Service --> Scalable -> Elastic 
1. Service --> Pods ---> Image-> 
2. Docker is just backend engine 
3. the Docker is just the runtime 
4. Kubernetes it the heart of the control (Kubernetes only controls)




Steps for creating a kubernetes cluster and apply and yml file and running and deploying 
a pod to the kubernetes in the cloud 
1.  login to you aws account 
2.  Got the EKS Service 
3.  Create a cluster and when you ccreate a cluster add the required configuration 
    only requirement is the cluster name that is required to create cluster 
4. on the next page additional details to be added 
    A Trusted role for the cluster that is manage services on the cluster behalf 

5. Select the role 
6. select your vpc 
7. select you subnets 
8. security group 
9. i have create cluter 
10. aws -version 
11. aws eks --region us-east-1 update-kubeconfig  --name democluster 
12  kubectl get pods    
                it should it 

------------------------------------------------------------------------------------------------
You have to find write a yml service file from :- 

































AWS Lambda 
BeanStalk 
API 

