# electron-video-desktop-app-basic
# electron-video-desktop-app-basic
# electron-video-desktop-app-basic
# electron-ffmpeg-desktop-basic

In this app, all the elctron specific config and logic,
that includes any underlying OS logic is going to be stuffed into the electron side of app.
This way, the web app side of the app can be kept as generic as possible. That way we can also increase the possibilty of reuseof the app lication as a standalone plain web app. 
In this app we need to communicate b/w the main window and the electron app and back and forth and this can be done using IPC system or interprocess communication system inside electron

