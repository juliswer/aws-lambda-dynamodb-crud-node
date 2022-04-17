const AWS = require("aws-sdk");

const updateTask = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, description } = JSON.parse(event.body);

    const { id } = event.pathParameters;

    await dynamodb
      .update({
        TableName: "TaskTable",
        Key: { id },
        UpdateExpression: "set title = :title, description = :description",
        ExpressionAttributeValues: {
          ":title": title,
          ":description": description,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      status: 200,
      body: {
        message: "Task updated succesfully",
      },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateTask,
};
