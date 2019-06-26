require("dotenv").config()
const path = require("path")
const thismod = "locations"

const __DATA =  process.env.LDWS_DATA === undefined ? "./data" : process.env.LDWS_DATA
const __CFG = `${__DATA}/config`
const __SQL = `${__DATA}/config/sql`
const __SECRETS = `${__DATA}/secrets`
const __LOGS = `${__DATA}/logs`
const __CACHE = `${__DATA}/cache`

module.exports = {

  getDir: (DIRTYPE, fn) => {
    return fn === undefined
      ? path.resolve(path.normalize(DIRTYPE))
      : path.resolve(path.join(path.normalize(DIRTYPE), fn))
  },

  cfgdir: fn => locations.getDir(__CFG, fn),

  secretsdir: fn => locations.getDir(__SECRETS, fn),

  logdir: fn => locations.getDir(__LOGS, fn),

  sqldir: fn => locations.getDir(__SQL, fn),

  cachedir: fn => locations.getDir(__CACHE, fn)
}

const locations = module.exports