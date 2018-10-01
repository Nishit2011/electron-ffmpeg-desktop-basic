const electron = require("electron");
//node js supports common js module and doesnt yet support
//es6 modules, so uses require instead of import

//app object gives hold to the lifecycle of  the
//electron application

//browser window is used to communicate with the
//user. also its the main window of our desktop app

/* changes made to script objet in package.json electron added as property */
const { app, BrowserWindow } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
