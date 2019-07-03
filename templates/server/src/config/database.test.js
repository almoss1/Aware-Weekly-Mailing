require("dotenv").config()
const blk = require("../config.js")
const fs = require("fs-extra")
const thismod = "database"

describe(`config - ${thismod}`, function() {
  test(`${thismod} config exists`, () => {
    expect(fs.existsSync(blk.cfgdir("database"))).toBe(true)
    expect(blk.getDbConfig).toBeFunction()
  }),

  test(`${thismod} config is valid`, () => {
    let cfg = blk.getDbConfig()
    expect(cfg).toContainKeys([
      "name",
      "server",
      "port",
      "user",
      "password",
      "database"
    ])
  })
})
