import { IConstruct } from "constructs";

import * as cfn from "aws-cdk-lib/cloudformation-include";
import * as s3  from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib";

import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

// ##### apigateway

const api = (api: apigateway.CfnStage): void => {
  // Check if logging enabled
};

// ##### cloudfront

const cdn = (cdn: cloudfront.CfnDistribution): void => {
  // Check if logging enabled
};

// ##### S3

const s3NotifyVersioning = (bucket: s3.CfnBucket): void => {
  if (!bucket.versioningConfiguration) {
    let text = `Custom-S3-Versioning: S3 Bucket "${bucket.logicalId}" has no Versioning defined.`;
    cdk.Annotations.of(bucket).addError(text);
  }
};

const s3NotifyEncryption = (bucket: s3.CfnBucket): void => {
  if (!bucket.bucketEncryption) {
    let text = `Custom-S3-Encryption: S3 Bucket "${bucket.logicalId}" has no Encryption defined.`;
    cdk.Annotations.of(bucket).addError(text);
  }
};
 
// ...

export class CustomAspects implements cdk.IAspect {
  public visit(node: IConstruct): void {
    if (node instanceof s3.CfnBucket) {

      s3NotifyVersioning(node);
      s3NotifyEncryption(node);

      // Add Apigateway and Cloudfront checks
      // ...
    }
  }
}
