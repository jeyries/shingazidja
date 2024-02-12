
Requires
---


- Android SDK [http://developer.android.com](http://developer.android.com)
- Apache Cordova [http://cordova.apache.org](http://cordova.apache.org)

Shingazidja
---



Build Android app

    cordova create cordova com.jeyries.shingazidja "Shingazidja" --link-to=webapp
    
    cd cordova
    cordova platform add android
    cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
    cordova build
    cordova emulate android


Test web server

    cd www
    python3 -m http.server
    open http://localhost:8000


Push to Github pages

    poetry install --no-root
    poetry shell
    ghp-import webapp
    git push origin gh-pages

