#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsBedrockChatStack } from '../lib/aws-bedrock-chat-stack';

const app = new cdk.App();
new AwsBedrockChatStack(app, 'AwsBedrockChatStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});