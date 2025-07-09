const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const today = (format) => {
  return dayjs().utc().format(format);
};

module.exports = today;
