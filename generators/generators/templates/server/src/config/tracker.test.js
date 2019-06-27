require("dotenv").config()
const blk = require("../config.js")
const fs = require("fs-extra")
const thismod = "sentry"

describe(`config - ${thismod}`, function() {
  test(`${thismod} config exists`, () => {
    expect(fs.existsSync(blk.cfgdir("sentry"))).toBe(true)
    expect(blk.getErrConfig).toBeFunction()
  }),

  test(`${thismod} config is valid`, () => {
    let cfg = blk.getErrConfig()
    //console.dir(cfg)

    expect(cfg).toBeDefined()
    expect(cfg).toContainKeys([
      "profile",
      "doc",
      "key",
      "logger"
    ])
  })
})
