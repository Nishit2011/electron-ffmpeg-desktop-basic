What is Electron?
Electron is a platform for writing desktop apps by using familiar tools, languages and design patterns
traditionally used for creating rich apps on the web.


Why use Web Tech for making desktop apps?
Primarily due to the explosion of web tech in the last few years.
Tech like NodeJS empowered web tech as far as hitting the oS was concerned. 
Web apps have shortcomings, as they are limited to execute inside the context of the browser which places some strict limitations on a WebSite's ability to access the user's underlying OS. So, certain I/O methods are quite constrained.
And Desktop apps covers the above limitations.
Desktop apps have higher level of OS access than traditional websites.


How does Electron work?
Electron is almost identical to Google Chrome.
So, if we get an understanding of how Google Chrome works internally,
we will get an idea of how Electron works.
Electron also uses the Chromium Open Source Project which is the exact same codebase
that chrome uses. Therefore, all the rules and convention that applies to chrome, also applies to electron as well.
When Chrome is opened, a main wind window opens. On opening other tabs, child processes run subsequestly, each for every tab. (This is basically done for encapsulation). And Electron works similar to this.


Who developed Electron?
Github

What is ffmpeg?
It is a stand-alone command line tool which will help us to read info about the video(such as duration)

What is ffmpeg-fluent?
It helps working with ffmpeg easier from nodeJS
Its actually a kind of wrapper
