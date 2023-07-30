import Express from "express";

export const getBasicHtml = (
  request: Express.Request,
  response: Express.Response
) => {
  try {
    return response.status(200).sendFile(`${__dirname}/views/index.html`);
  } catch (err) {
    console.error(err);
  }
};
