provider "aws" {
  region = "us-east-1"
}

output "print_version" {
  value = var.script_version
}
// i am creating a resource
// type of resource is aws_s3_bucket
// for that reason i wish to first plan
resource "aws_s3_bucket" "nilesh_bucket_001" {
   bucket = var.nileshbucket
}
