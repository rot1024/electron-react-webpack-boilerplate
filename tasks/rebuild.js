"use strict";

const childProcess = require("child_process");
const electron = require("electron");
const rebuild = require("electron-rebuild");

rebuild.shouldRebuildNativeModules(electron)
  .then(shouldBuild => {
    if (!shouldBuild) {
      console.log("It is not neccessary to rebuild native modules.");
      return true;
    }

    const electronVersion = childProcess.execSync(`${electron} --version`, {
      encoding: "utf8",
    }).match(/v(\d+\.\d+\.\d+)/)[1];

    console.log(`Rebuilding native modules for electron v${electronVersion} ...`);

    return rebuild.installNodeHeaders(electronVersion)
      .then(() => rebuild.rebuildNativeModules(electronVersion, "./node_modules"));
  })
  .then(() => {
    console.log("done!");
  })
  .catch(e => {
    console.error("Building modules didn't work!");
    console.error(e.stack || e);
  });
