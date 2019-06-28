const blk = require("./config")
const sql = require("seriate")
const fs = require("fs-extra")
const thismod = "refresh"

let runsql = async (dbcfg, queryname) => {
    blk.log(thismod, `sql: ${queryname}`)
    await sql.execute(dbcfg, { query: sql.fromFile(blk.sqldir(queryname)) })
    .then( rs1 => {
        let cf=blk.cachedir(`${queryname}.json`);
        fs.writeJSONSync(cf, rs1, { spaces: 3 });
        sql.closeConnection(dbcfg);
    }), err =>  blk.log(thismod,`ERROR: ${err}`)
}

module.exports = async (args, options, logger) => {
  let dbcfg = blk.getDbConfig()
  if (dbcfg === undefined) {
    blk.log(thismod, `ERROR: the specified configuration is undefined`)
  } else {
    blk.log(thismod,`connecting to the ${dbcfg.name} database on ${dbcfg.server}`
    )
    dbcfg.cache.setup.forEach(async script => {
      try {
        await runsql(dbcfg, script)
      } catch (err) {
        blk.log(thismod,`ERROR: ${err}`)
      }
    })
  }
}
