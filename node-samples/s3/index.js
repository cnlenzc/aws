/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html.

Purpose:
sample.ts demonstrates how to get started using node.js with the AWS SDK for JavaScript.

Inputs (replace in code):
 - BUCKET_NAME
 - KEY
 - BODY

Running the code:
node sample.js
*/
// snippet-start:[GettingStarted.JavaScript.NodeJS.sampleV3]
// Import required AWS SDK clients and commands for Node.js.

import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";

// Set the parameters
const params = {
  Bucket: "sample-node-start-s3", // The name of the bucket. For example, 'sample-bucket-101'.
  Key: `sample_upload_${new Date().toISOString()}.txt`, // The name of the object. For example, 'sample_upload.txt'.
  Body: `Hello world! now is ${new Date().toLocaleString()}`, // The content of the object. For example, 'Hello world!".
};

const run = async () => {
  // Create an Amazon S3 bucket.
  try {
    const data = await s3Client.send(
        new CreateBucketCommand({ Bucket: params.Bucket })
    );
    console.log("Successfully created a bucket called ", data.Location);
  } catch (err) {
    console.log("Error 1", err);
  }
  // Create an object and upload it to the Amazon S3 bucket.
  try {
    const results = await s3Client.send(new PutObjectCommand(params));
    console.log(
        "Successfully created " +
        params.Key +
        " and uploaded it to " +
        params.Bucket +
        "/" +
        params.Key
    );
  } catch (err) {
    console.log("Error 2", err);
  }
};

run();

// snippet-end:[GettingStarted.JavaScript.NodeJS.sampleV3]
// For unit tests.
// module.exports = {run, params};
