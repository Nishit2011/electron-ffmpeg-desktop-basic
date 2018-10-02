const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");
//node js supports common js module and doesnt yet support
//es6 modules, so uses require instead of import

//app object gives hold to the lifecycle of  the
//electron application

//browser window is used to communicate with the
//user. also its the main window of our desktop app

/* changes made to script objet in package.json electron added as property */

//this is the electron app where we will read the file duration of the
//video uploaded via the main window(index.html).
//the video duration, thus calculated using the ffmpeg file module will then
//be passed over to the main window
const { app, BrowserWindow, ipcMain } = electron;
let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

//listening the emmited even from web app(Main Window)
//the first arg is the event obj, w2hich has data about the process that actually sent the event
//the secong arg is the info sent when the event was emitted
ipcMain.on("video:submit", (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    //communicating w/t the main window(inde.html) and passing the duration of the video
    mainWindow.webContents.send("video:metadata", metadata.format.duration);
  });
});
