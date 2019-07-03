require("dotenv").config()
const blk = require("../config")
const thismod = "logging"

describe(`config - ${thismod}`, function() {
  test("there is a configured logger", () => {
    expect(blk.logger).toBeDefined()
    expect(blk.log).toBeFunction()
  })
})
