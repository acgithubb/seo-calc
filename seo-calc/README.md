# seo-calc
This AWS Lambda function provides an API endpoint to estimate costs based on a provided competitiveness level. It supports "Low", "Medium", and "High" competitiveness levels, converting these inputs into a numerical score and calculating the estimated cost accordingly.

Purpose

The purpose of this Lambda function is to demonstrate how to process input from an API Gateway event, perform simple logic based on the input, and return a calculated response. This example specifically deals with estimating costs based on a competitiveness parameter.

Dependencies

This function does not require any external dependencies beyond the standard Node.js runtime environment available in AWS Lambda.

Setup

To set up and deploy this Lambda function, ensure you have:

AWS CLI installed and configured.
An AWS account with permissions to create and manage Lambda functions and API Gateway instances.
Deployment

Step 1: Prepare Your Lambda Function
Write the Lambda function code in a file named index.js or similar.
Ensure your function exports the handler correctly, as shown in the provided code snippet.
Step 2: Deploy Your Function to AWS Lambda
Package Your Function: If you have additional files or dependencies, zip them together with your main .js file.
Create a New Lambda Function:
Go to the AWS Lambda Console.
Click on "Create function".
Select "Author from scratch".
Enter a function name.
Choose the Node.js runtime.
Create or select an execution role with basic Lambda permissions.
Click "Create function".
Upload Your Function Code:
In the "Function code" section, upload your zip file or enter the code directly if it's just one file.
Make sure the handler name matches your file and function (e.g., index.lambdaHandler).
Step 3: Set Up API Gateway
Create a new API in the API Gateway console or use an existing one.
Configure a new resource and method to trigger your Lambda function.
Deploy your API to make it accessible.
Testing

To test your function:

Use a tool like Postman or cURL to send a POST request to your API Gateway URL.
Include a JSON body with the structure {"competitiveness": "Medium"} to test the function.
Verify the response to ensure it returns the correct estimated cost based on the competitiveness level.
Example request:

json
Copy code
{
  "competitiveness": "High"
}
Example response:

json
Copy code
{
  "estimatedCost": 90
}
Error Handling

The function returns a 400 Bad Request response if the competitiveness field is missing, the competitiveness level is invalid, or the request body is not in valid JSON format.
Ensure your requests are correctly formatted to avoid these errors.

