amplify init

Project information
| Name: matchfront
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: vue
| Source Directory Path: src
| Distribution Directory Path: dist
| Build Command: npm run-script build
| Start Command: npm run-script serve

? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use amplify
Adding backend environment dev to AWS Amplify app: d2mckrkamf5fmh

Deployment completed.
Deploying root stack matchfront [ ====================-------------------- ] 2/4
	amplify-matchfront-dev-203609  AWS::CloudFormation::Stack     CREATE_IN_PROGRESS             Mon Aug 21 2023 20:36:12…     
	AuthRole                       AWS::IAM::Role                 CREATE_COMPLETE                Mon Aug 21 2023 20:36:31…     
	UnauthRole                     AWS::IAM::Role                 CREATE_COMPLETE                Mon Aug 21 2023 20:36:31…     
	DeploymentBucket               AWS::S3::Bucket                CREATE_IN_PROGRESS             Mon Aug 21 2023 20:36:15…     

✔ Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) · yes
Deployment state saved successfully.
✔ Initialized provider successfully.
✅ Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything