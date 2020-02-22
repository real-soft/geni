const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./lib/files");

clear();

console.log(
  chalk.yellow(figlet.textSync("Geni CLI", { horizontalLayout: "full" }))
);

if (files.directoryExists(".git")) {
  console.log(chalk.red("Ya es un repositorio de Git!"));
  process.exit();
}
