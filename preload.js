const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld('api_electron', {
    sendNotification(title, body) {
        ipcRenderer.send('notifiy', title, body)
    }
})