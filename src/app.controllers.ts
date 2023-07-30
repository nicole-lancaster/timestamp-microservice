import Express from "express";

export const getBasicHtml = (
  request: Express.Request,
  response: Express.Response
) => {
  return response.status(200).sendFile(__dirname + "/views/index.html");
};
