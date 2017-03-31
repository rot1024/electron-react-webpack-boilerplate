"use strict";

const fs = require("fs");
const os = require("os");
const archiver = require("archiver");
const argv = require("minimist")(process.argv.slice(2));
const pkg = require("../package.json");

const shouldArchiveAll = argv.all || false;

const archs = shouldArchiveAll ? ["ia32", "x64"] : [os.arch()];
const platforms = shouldArchiveAll ? ["linux", "win32", "darwin"] : [os.platform()];
platforms.forEach(platform => {
  archs.forEach(arch => {
    console.log(`${platform} ${arch} start`);
    archive(platform, arch).then(
      () => console.log(`${platform} ${arch} finish`),
      err => {
        if (!err) return;
        console.log(`${platform} ${arch} error`);
        throw err;
      }
    );
  });
});

function archive(platform, arch) {
  if (platform === "darwin" && arch === "ia32") {
    return Promise.reject(); // eslint-disable-line prefer-promise-reject-errors
  }
  return new Promise((resolve, reject) => {
    const dir = `dist/${pkg.productName || pkg.name}-${platform}-${arch}`;
    const name = `${pkg.productName || pkg.name}-v${pkg.version}-${platform}-${arch}`;
    const out = `dist/${name}.zip`;
    const arc = archiver("zip");
    const output = fs.createWriteStream(out);
    output.on("close", resolve);
    arc.on("error", reject);
    arc.pipe(output);
    arc.directory(dir, name).finalize();
  });
}
