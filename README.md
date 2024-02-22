# An example of AWS Bedrock GenAI application using Meta's Llama 2 foundational model

This example demonstrates how AWS Bedrock can be used for a LLM (llama2-70b) model using AWS Lambda and exposed as an API.  
PS: `This solution can be modified to use any Bedrock supported foundational models`

This project is developed using AWS CDK in TypeScript.

## Solution Architecture
![image](architecture.PNG "Solution Architecture")

## What does it build?
* Creates an AWS Lambda function that interacts with AWS Bedrock
* Uses Meta's  `llama2-70b` model
* Creates an API Gateway endpoint to expose the API

## Steps to run and test
* Deploy the CDK code. Wait for the deploy to finish.  It will print out the API endpoint for you to hit.
  * ![image](test-llama-model.PNG "Example of API response from LLAMA 2 model")


## Additional Considerations
* LLMs takes a long time to execute.  I have extended the timeout for my lambda to be 1 minute.  Match your timeout based on your use cases.
* Learn about [AWS Bedrock](https://aws.amazon.com/bedrock/)
* AWS Bedrock [Foundational Models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html)

