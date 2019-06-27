require("dotenv").config()
const winston = require("winston")
const locations = require("./locations")

const getTransports = () => {
  let rc = [new winston.transports.Console()]
  if (
    process.env.hasOwnProperty("LDWS_LOGFILE") &&
    process.env.LDWS_LOGFILE === "true"
  ) {
    rc.push(
      new winston.transports.File({ filename: locations.logdir("ldws.log") })
    )
  }
  return rc
}

module.exports = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD h:mm:ss a" }),
    winston.format.json(),
    winston.format.printf(
      info => `${info.timestamp}: [${info.label}] ${info.message}`
    )
  ),
  transports: getTransports()
})
