"use strict";

module.exports.hello = async (event) => {

  const message = 'This is a app made by Julian Swerdlin using AWS Lambda and AWS API Gateway (dynamodb, serverless and other tools) code: https://github.com/juliswer/aws-lambda-dynamodb-crud-node';

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message,
        input: event,
      },
      null,
      2
    ),
  };
};
