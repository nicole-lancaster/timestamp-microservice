import Express from "express";

export const getBasicHtml = (
  request: Express.Request,
  response: Express.Response,
) => {
  try {
    return response.status(200).sendFile(`${__dirname}/views/index.html`);
  } catch (err) {
    return console.error(err);
  }
};

export const getDate = (
  request: Express.Request,
  response: Express.Response,
) => {
  const { date } = request.params;
  const dateObj = new Date(date);
  const unixDate = dateObj.getTime();
  const utcDate = dateObj.toUTCString();
  const dateAndTimeStamp = { unix: unixDate, utc: utcDate };

  try {
    return response.status(200).send(dateAndTimeStamp);
  } catch (err) {
    return console.error(err);
  }
};
