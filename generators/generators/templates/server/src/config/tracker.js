require("dotenv").config()
const _ = require("lodash")
const fs = require("fs-extra")
const locations = require("./locations")
const logger = require("./logging")
const thismod = "sentry"

let log = message => logger.error(message, { label: thismod })

module.exports = {
  getConfig: () => {
    // configuration may be overriden
    let cfg = { profile: process.env.LDWS_SENTRY }

    if (cfg.profile === undefined) {
      let configFile = locations.cfgdir("sentry")
      if (!fs.existsSync(configFile)) {
        log('missing config, "sentry"')
        return undefined
      }
      try {
        cfg = fs.readJSONSync(configFile)
      } catch (err) {
        log(err)
        return undefined
      }
    }

    if (cfg.hasOwnProperty("profile")) {
      if (typeof cfg.profile === "string" && cfg.profile[0] === "*") {
        let pname = cfg.profile.substring(1)
        let secfile = `${locations.secretsdir()}/sentry-${pname}`
        if (!fs.existsSync(secfile)) {
          log(`missing secret, "sentry-${pname}"`)
          return undefined
        }
        try {
          let secrets = fs.readJSONSync(secfile)
          cfg = Object.assign({}, { profile: pname }, secrets)
        } catch (err) {
          log(err)
          return undefined
        }
      }
      return cfg
    }
    return undefined
  }
}
