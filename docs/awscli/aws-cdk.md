#### install
npm install -g aws-cdk
cdk --version

#### login aws
aws sso login
aws sts get-caller-identity

#### create s3 Bootstrapping
##### cdk bootstrap aws://ACCOUNT-NUMBER/REGION
cdk bootstrap aws://144588504674/us-east-1

#### diversos
npm install && cdk synth && cdk deploy
cdk destroy
cdk --help
