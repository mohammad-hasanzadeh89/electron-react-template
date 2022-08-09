const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;
const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:800,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload")
        }
    });

    win.loadFile('index.html');
}

if (isDev) {
    const electronReload = require('electron-reload');
    console.log("isDev: ", isDev);
    electronReload(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    });
}

app.whenReady().then(createWindow);

ipcMain.on('notifiy', (e, title, body) => {
    new Notification({title, body}).show();
})

app.on('window-all-closed', () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
});