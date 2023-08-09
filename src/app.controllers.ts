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

  const unixRegex = /^[0-9]+$/;
  const dateIsNumberFormat = unixRegex.test(`${date}`);
  let timeStamp;

  if (!dateIsNumberFormat) {
    const unixTimestamp = Date.parse(date);
    const utcDate = new Date(unixTimestamp).toUTCString();

    unixTimestamp
      ? (timeStamp = { unix: unixTimestamp, utc: utcDate })
      : (timeStamp = { error: "Invalid Date" });
  } else {
    const unixTimestamp = parseInt(date);
    const actualDate = new Date(unixTimestamp);
    const utcDate = actualDate.toUTCString();

    timeStamp = { unix: unixTimestamp, utc: utcDate };
  }

  try {
    return response.status(200).send(timeStamp);
  } catch (err) {
    return console.error(err);
  }
};

export const getCurrentDate = (
  request: Express.Request,
  response: Express.Response,
) => {
  const currentTimeStamp = {
    unix: Date.now(),
    utc: new Date(Date.now()).toUTCString(),
  };
  try {
    return response.status(200).send(currentTimeStamp);
  } catch (err) {
    return console.error(err);
  }
};
