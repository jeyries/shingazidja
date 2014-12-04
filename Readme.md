
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
