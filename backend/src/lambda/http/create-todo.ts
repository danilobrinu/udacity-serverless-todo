import "source-map-support/register";

import * as AWS from "aws-sdk";
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";

import { CreateTodoRequest } from "../../requests/CreateTodoRequest";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const newTodo: CreateTodoRequest = JSON.parse(event.body);

  // TODO: Implement creating a new TODO item
  const dynamo = new AWS.Credentials()

  return undefined;
};