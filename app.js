const moment = require("moment");
const chalk = require("chalk");
const log = console.log;
const timestamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const numberOfYear = moment().format("DDD");
const secondsDay = moment().format("s");
const dst = moment().isDST();
const leapYear = moment().isLeapYear();
moment().format();

log("It is " + chalk.blue.bold(timestamp));
log("It is the " + chalk.magenta.bold(numberOfYear + "th") + " Day of the year.");
log("It is " + chalk.cyan.bold(secondsDay) + " seconds into the day. ");
log("It " + chalk.yellow.bold(dst) + " during Daylights Savings Time.");
log("It " + chalk.red.bold(leapYear) + " not a leap year.");
