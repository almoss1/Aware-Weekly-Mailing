require("dotenv").config()
const blk = require("./config.js")
const fs = require("fs-extra")
const thismod = "refresh"

describe(`config - ${thismod}`, function() {
  test("there sql scripts used in refreh are available", () => {
    expect(fs.existsSync(blk.sqldir("solution.sql"))).toBe(true)
    expect(fs.existsSync(blk.sqldir("status.sql"))).toBe(true)
    expect(fs.existsSync(blk.sqldir("alerts.sql"))).toBe(true)
  })

  test("there cache data is available", () => {
    expect(fs.existsSync(blk.cachedir("solution.json"))).toBe(true)
    expect(fs.existsSync(blk.cachedir("status.json"))).toBe(true)
    expect(fs.existsSync(blk.cachedir("alerts.json"))).toBe(true)
  })
})
