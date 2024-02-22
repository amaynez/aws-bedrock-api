import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { Handler } from "aws-lambda";

export const handler: Handler = async (event, context) => {

    const badResponse = {
        statusCode: 400,
        body: JSON.stringify('Invalid request.  Ask me a question!')
    }

    if (event.body && event.body !== "") {
        let body = JSON.parse(event.body);
        if (body.question && body.question !== "") {
            let question = body.question;

            const modelId = process.env.MODEL_ID;
            const rockerRuntimeClient = new BedrockRuntimeClient({region: process.env.REGION});
            
            const input = { 
                body: JSON.stringify({
                    prompt: question
                }),
                contentType: 'application/json',
                accept: 'application/json',
                modelId: `${modelId}`
            };
            const command = new InvokeModelCommand(input);
            const response = await rockerRuntimeClient.send(command);
    
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(JSON.parse(new TextDecoder().decode(response.body)).generation, null, 2)
            }
        } else {
            return badResponse;
        }
    } else {
        return badResponse;
    }
}