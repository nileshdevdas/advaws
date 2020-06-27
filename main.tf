# required only for init
provider "aws" {
  region = "us-east-1"
}
# required only for init

  output "script_version" {
  value = var.script_version
}
