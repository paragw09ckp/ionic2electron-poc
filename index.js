var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;


app.on('ready', function() {
    var appWindow;
    appWindow = new BrowserWindow({
        height: 760,
        width: 1280
    });
  
    appWindow.on('closed', () => {
        console.log('App Closed!');
        appWindow = null;
    })

    appWindow.loadURL('file://' + __dirname + '/www/index.html');
});