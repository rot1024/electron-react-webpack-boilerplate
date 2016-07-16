import { app, BrowserWindow } from "electron";

let win;

async function installExtensions() {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line node/no-unpublished-require
    const installer = require("electron-devtools-installer");
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = [
      "REACT_DEVELOPER_TOOLS",
      "REDUX_DEVTOOLS"
    ];
    for (const e of extensions) {
      // eslint-disable-next-line babel/no-await-in-loop
      await installer.default(installer[e], forceDownload);
    }
  }
}

function createWindow() {
  win = new BrowserWindow({
    show: false,
    width: 800,
    height: 600
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL(`file://${__dirname}/index.html`);
    win.webContents.openDevTools();
  }

  if (process.env.NODE_ENV === "production") {
    win.loadURL(`file://${__dirname}/../app/index.html`);
  }

  win.webContents.on("did-finish-load", () => {
    win.show();
    win.focus();
  });

  win.on("closed", () => {
    win = null;
  });
}

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line node/no-unpublished-require
  require("electron-debug")();
}

app.on("ready", async () => {
  await installExtensions();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
