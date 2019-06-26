#!/usr/bin/env node

// set up the environment using .env file
// if available - as early as possible
require("dotenv").config();

const pak = require("../package.json");
const prog = require("caporal");
const raven = require("raven");
const blk = require("./config");

// Sentry - raven api configration
let sentry = blk.getErrConfig()

if (undefined === sentry) {
	raven.disableConsoleAlerts();
} else {
	if (false === sentry.hasOwnProperty('key'))
		raven.disableConsoleAlerts();
	else {
		raven.config(sentry.key).install();
		raven.logger = sentry.key.logger;
	}
}

// Sentry is on guard
raven.context(function () {
	prog
		.bin(pak.name)
    .version(pak.version)

    .command('list', 'lists buildings with the solution')
    .action(require('./list'))

		.command('refresh', 'updates runtime configuration files')
		.action(require('./refresh'))

		;

    // no argument passed the go into server mode.
	if (process.argv.length <= 2) {
		process.argv[2] = "server";
	}

	prog.parse(process.argv);
});
