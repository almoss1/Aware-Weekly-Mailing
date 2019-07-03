const blk = require("./config")
const fs = require("fs-extra")
const thismod = "list"

String.prototype.trunc = function(n){return (this.length > n) ? this.substring(0, n)+ '...' : this}
let error = message => blk.logger.error(message, { label: thismod })

module.exports = (args, options, logger) => {
  let cf = blk.cachedir("solution.json")

  if (!fs.existsSync(cf)) {
    error(`cache file (${cf}) is missing`)
    error(`trying running "refresh" regenerate it`)
    return
  }

  console.log(`\nsid\t fac\t ${'name'.padEnd(30)}sol`)
  console.log(`-----\t -----\t ${'-----'.padEnd(30)}-----`)

  let bkc=fs.readJSONSync(cf)
  bkc.map( el => console.log(el.SolutionId + '\t'
    , el.BuildingId + '\t'
    , el.BuildingName.trunc(25).padEnd(30)
    + el.SolutionName))

  console.log(`\n`)

}
