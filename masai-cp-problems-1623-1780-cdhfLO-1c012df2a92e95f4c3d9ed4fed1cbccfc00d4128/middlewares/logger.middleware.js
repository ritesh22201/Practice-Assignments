const fs = require('fs');

const logger = (req, res, next) => {
  const log = `URL: ${req.url}, Method: ${req.method}, Timestamp: ${new Date().toString()}`;
  // console.log(log);
  fs.appendFile('logs.txt', log + '\n', (err) => {
    if (err) {
      console.error(err);
    }
  });
  next();
};

module.exports = {
  logger,
};

//+0.5
