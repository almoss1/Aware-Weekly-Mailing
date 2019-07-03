require("dotenv").config()
const _ = require("lodash")
const fs = require("fs-extra")
const locations = require("./locations")
const logger = require("./logging")
const thismod = "database"

let log = message => logger.error(message, { label: thismod })

module.exports = {
  getConfig: () => {
    // configuration may be overriden
    let cfg = {
      profile: process.env.LDWS_DB,
      cache: { setup: ["solution", "status", "alerts"] }
    }

    if (cfg.profile === undefined) {
      let configFile = locations.cfgdir("database")
      if (!fs.existsSync(configFile)) {
        log('missing config, "database"')
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
        let secfile = `${locations.secretsdir()}/database-${pname}`
        if (!fs.existsSync(secfile)) {
          log(`missing secret, "database-${pname}"`)
          return undefined
        }
        try {
          let secrets = fs.readJSONSync(secfile)
          cfg = Object.assign({}, cfg, { profile: pname }, secrets)
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
