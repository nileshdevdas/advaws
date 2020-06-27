provider "aws" {
  region = "us-east-1"
}
locals {
  abc = 10
  pqr = 20
}
output "test_locals" {
  value = local.abc
}
output "test_locals_2" {
  value = local.pqr
}
variable "xxxx" {
  default = "Xxxx"
}
output "print_version" {
  value = var.script_version
}
resource "aws_s3_bucket" "nilesh_bucket_001" {
   bucket = var.nileshbucket
}
data aws_s3_bucket "b3" {
  bucket = "gulzarweb"
}
output "print_bucket_info" {
  value = data.aws_s3_bucket.b3
}
output "print_bucket_info1" {
  value = data.aws_s3_bucket.b3.arn
}
# importing an exisisting resource from aws in you state file :-
resource "aws_s3_bucket" "newimportedbucket" {}
# 1. create a empty resource
        # terraform  <type>.<resourceid>  actual_resource_name
# 2. use the terraform import aws_s3_bucket.newimportedbucket
#.3. How to check if the resource got imported or not
     # u can run
     # terraform state list
     # terraform state show  type.rsourceid
# the module definition :-
module "buckets" {
  //if your module has variables the should be passed in the module block
  source = "./buckets"
  abc = "xxxx"
}

output "xxxx" {
  value = module.buckets.demo
}
# the definition will be done with configuration you say again terraform init









