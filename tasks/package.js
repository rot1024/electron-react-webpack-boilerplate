"use strict";

const os = require("os");
const packager = require("electron-packager");
const argv = require("minimist")(process.argv.slice(2));
const del = require("del");
const pkg = require("../package.json");

const shouldBuildAll = argv.all || false;

const options = {
  dir: ".",
  asar: true,
  name: pkg.productName,
  "app-version": pkg.version,
  // icon: "app/app",
  ignore: [
    // source-map-support dependencies
    /^\/node_modules\/(?!source-map-support|amdefine)/,
    /^\/(?!app|build|node_modules|package.json$)/,
    /^\/app\/(?!assets|index.html)/
  ],
  version: pkg.devDependencies.electron.replace(/^\^/, ""),
  out: "dist"
};

del("dist")
  .then(() => {
    if (shouldBuildAll) {
      const archs = ["ia32", "x64"];
      const platforms = ["linux", "win32", "darwin"];
      platforms.forEach(platform => {
        archs.forEach(arch => {
          pack(platform, arch).then(
          () => console.log(`${platform} ${arch} finished`),
          err => { if (err) throw err; }
        );
        });
      });
    } else {
      pack(os.platform(), os.arch()).then(
      () => console.log(`${os.platform()} ${os.arch()} finished`),
      err => { if (err) throw err; }
    );
    }
  })
  .catch(err => {
    console.error(err);
  });

function pack(platform, arch) {
  if (platform === "darwin" && arch === "ia32") {
    return Promise.reject();
  }

  const opts = Object.assign({}, options, {
    platform,
    arch,
    // icon: options.icon + (
    //   platform === "darwin" ? ".icns" :
    //   platform === "win32" ? ".ico" : ".png"
    // )
  });

  return new Promise((resolve, reject) => {
    packager(opts, (err, appPaths) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(appPaths);
    });
  });
}
