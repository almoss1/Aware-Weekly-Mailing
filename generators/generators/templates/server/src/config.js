const thismod = "config"
const _ = require("lodash")
const locations = require("./config/locations")
const tracker = require("./config/tracker")
const database = require("./config/database")

module.exports = {
  cfgdir: fn => locations.cfgdir(fn),
  secretsdir: fn => locations.secretsdir(fn),
  logdir: fn => locations.logdir(fn),
  sqldir: fn => locations.sqldir(fn),

  /**
   * Gets a reference to the cache directory or to a file
   * in it named by its parameter.
   *
   * @param {string} fn - optional filename in the cache
   * @return {string} the path to the cache dir or file
   *
   * @example
   *
   *     cachedir('solution.json')
   */
  cachedir: fn => locations.cachedir(fn),

   /**
   * Gets a reference to the winston configured logger
   * for this project
   *
   * @return {logger} the logger configured for this instance
   *
   * @example
   *
   *     logger
   */

  logger: require("./config/logging"),
  log: (modname, message) =>
    module.exports.logger.info(message, { label: modname }),

  getErrConfig: () => tracker.getConfig(),
  getDbConfig: () => database.getConfig()

}