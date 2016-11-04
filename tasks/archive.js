"use strict";

const fs = require("fs");
const os = require("os");
const archiver = require("archiver");
const argv = require("minimist")(process.argv.slice(2));
const pkg = require("../package.json");

const shouldArchiveAll = argv.all || false;

if (shouldArchiveAll) {
  const archs = ["ia32", "x64"];
  const platforms = ["linux", "win32", "darwin"];
  platforms.forEach(platform => {
    archs.forEach(arch => {
      archive(platform, arch).then(() => {
        console.log(`${platform} ${arch} finished`);
      }).catch(err => {
        if (err) console.error(err.stack || err);
      });
    });
  });
} else {
  archive(os.platform(), os.arch()).then(() => {
    console.log(`${os.platform()} ${os.arch()} finished`);
  }).catch(err => {
    if (err) console.error(err.stack || err);
  });
}

function archive(platform, arch) {
  if (platform === "darwin" && arch === "ia32") {
    return Promise.reject();
  }
  return new Promise((resolve, reject) => {
    const dir = `dist/${pkg.productName}-${platform}-${arch}`;
    const name = `${pkg.productName}-v${pkg.version}-${platform}-${arch}`;
    const out = `dist/${name}.zip`;
    const arc = archiver("zip");
    const output = fs.createWriteStream(out);
    output.on("close", resolve);
    arc.on("error", reject);
    arc.pipe(output);
    arc.directory(dir, name).finalize();
  });
}
