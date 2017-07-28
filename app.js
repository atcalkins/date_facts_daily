const moment = require("moment");
const chalk = require("chalk");
const timestamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const numberOfYear = moment().format("DDD");
const secondsDay = moment();
const secondsMidnight = secondsDay.clone().startOf('day');
const diffSeconds = secondsDay.diff(secondsMidnight, 'seconds');
const dst = moment().isDST();
const leapYear = moment().isLeapYear();
moment().format();

console.log("It is " + chalk.blue.bold(timestamp));
console.log("It is the " + chalk.magenta.bold(numberOfYear + "th") + " Day of the year.");
console.log("It is " + chalk.cyan.bold(diffSeconds) + " seconds into the day. ");
console.log("It " + chalk.yellow.bold(dst ? "is" : "is not") + " during Daylights Savings Time.");
console.log("It " + chalk.red.bold(leapYear ? "is" : "is not") + " not a leap year.");
