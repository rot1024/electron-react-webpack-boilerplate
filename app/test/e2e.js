import path from "path";
import fs from "fs";

import electron from "electron";
import { Application } from "spectron";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe("application launch", () => {

  let app;

  beforeEach(() => {
    expect(fs.statSync("build").isDirectory()).toBe(true);
    app = new Application({
      path: electron,
      args: [path.join(__dirname, "..", "..")]
    });
    return app.start();
  });

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
    return Promise.resolve();
  });

  it("shows an initial window", async () => {
    await app.client.waitUntilWindowLoaded();
    expect(await app.client.getWindowCount()).toBe(1);
  });

});
