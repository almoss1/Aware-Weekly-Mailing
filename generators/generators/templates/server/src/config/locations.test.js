require("dotenv").config()
const blk = require("../config")
const fs = require("fs-extra")
const thismod = "locations"

describe(`config - ${thismod}`, function() {
  test("required directories exist", () => {
    expect(fs.existsSync(blk.cfgdir())).toBe(true)
    expect(fs.existsSync(blk.secretsdir())).toBe(true)
    expect(fs.existsSync(blk.logdir())).toBe(true)
    expect(fs.existsSync(blk.sqldir())).toBe(true)
    expect(fs.existsSync(blk.cachedir())).toBe(true)
  })
})
