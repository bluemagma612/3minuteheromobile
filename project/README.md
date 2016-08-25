# Music Band Ionic
This project uses Ionic hybrid platform to provide a full application for any kind of MUSIC BAND and ARTIST.

## Dependecies, Run and Build

### Install NodeJS dependencies

Run `npm install` to install all needed dependencies.

### Install Plugins and Javascript dependencies
#### Linux/MacOX
Run `./install.sh` to install all needed plugins and dependencies

#### Windows Users
Similarly, Windows users should run `install.bat`.

### Run the app
Use `grunt serve -l` to run the app in browser and watch for changes in code

or

use `grunt serve` to just run the app for a browser preview

or

use `grunt serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform

```bash
$ grunt platform:add:<platform>
```

Supported Cordova platforms:

```bash
$ grunt platform:add:ios
$ grunt platform:add:android
```

### Build the app

```bash
$ grunt build
```

### Εmulate the app on simulator
iOS:

```bash
$ grunt emulate:ios
```

Android:

```bash
$ grunt emulate:android
```

For more information, see [Ionic Framework Generator's instructions](https://github.com/diegonetto/generator-ionic).

### Plugins installation

Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:

```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **ionic-plugin-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.
* **cordova-plugin-inappbrowser** - Provides a web browser view. It could be used to open images, access web pages, and open PDF files.
* **com.phonegap.plugins.PushPlugin** - This plugin is for use with Cordova, and allows your application to receive push notifications on Amazon Fire OS, Android, iOS, Windows Phone and Windows8 devices (https://github.com/phonegap-build/PushPlugin.git).
* **de.appplant.cordova.plugin.email-composer@0.8.2** - The plugin provides access to the standard interface that manages the editing and sending an email message (https://github.com/katzer/cordova-plugin-email-composer.git).
* **nl.x-services.plugins.socialsharing** - Share images, text, messages via Facebook, Twitter, Email, SMS, WhatsApp, etc using this plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git).
* **com.keosu.cordova.stream** - The plugin allows to play audio stream (https://github.com/skounis/cordova-audio-stream-plugin)
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0
* **cordova-plugin-transport-security** - Cordova / PhoneGap Plugin to allow 'Arbitrary Loads' by adding a declaration to the Info.plist file to bypass the iOS 9 App Transport Security.
* **cordova-plugin-network-information** - This plugin provides an implementation of an old version of the Network Information API. It provides information about the device's cellular and wifi connection, and whether the device has an internet connection.

## Demo
Install [Ionic View](http://view.ionic.io/) and preview the app on your mobile device using the following Ionic View ID: `0cfd4232`

## Documentation
* [Music Band Quick Start Guide](https://docs.google.com/document/d/19BhjEpYt7kOgr8PZFiEvNy81k3gV7h7NRe6Oxa_pt9E/edit?usp=sharing)

## Changelog
```
1.11 - July 29, 2016
- Upgrade to Firebase 3.x

1.10 - May 05, 2016
- Ionic update to v1.3.0
- Fix of the ionic keyboard plugin id

1.9 - February 10, 2016
- Ionic update to v1.2.4 as Ionic 1.2 uses native scrolling by default.
- Ionic CLI update to v1.7.13
- Addition of task in Gruntfile to minify and obfuscate CSS, HTML and Javascript files

1.8 - December 22, 2015
- Fix on ConnectionType always returning Connection.UNKNOWN (Android)
- Ionic update to v1.1.1
- Cordova CLI update to v5.4.1
- Ionic CLI update to v1.7.12
- ngCordova update to v0.1.23-alpha
- Support of android versions back to 4.0
- Replacement of AdMob plugin with AdMob Pro
- Cordova Android engine set to 5.0.0
- Plugins update
- Improved installation process for Win/Linux/MacOS
- Usage of a forked version of the audio stream plugin
- Copy of package file to be used as a replacement when needed
- README.md update with improved instructions on how to install, run, build the app.

1.7 - November 5, 2015
- Internet Connectivity check. Notifies user when internet connection problem occurs on bringing remote data.
- README.md update with improved instructions on how to install, run, build the app.

1.6 - October 19, 2015
- Fix bouncing of the webview
- Ionic CLI update to v1.7.6

1.5 - October 11, 2015
- Add dependency to Transport Security plugin which enables/allows the HTTP requests for iOS9 and above
- Update Ionic CLI to v1.6.5

1.4 - September 30, 2015
- Shoutcast meta data support
- Ionic update to v1.1.0
- Cordova CLI update to v5.3.3

1.3 - August 28, 2015
- Parse.com has been added as an optional store for all the settings of the application
- Ionic cli update to v1.6.4
- ngCordova update to v.0.1.18-alpha
- Reference to ng-cordova-oauth v0.1.4

1.2 - July 31 2015
- Cordova white list plugin added. This fixes network issues reported for android devices
- Ionic, Ionic CLI and Cordova references have been updated to their latest versions

1.1 - July 27, 2015
- Firebase has been added as an optional store for all the settings of the application
- Fix: small typo in the social media settings fixed

1.0 - July 11, 2015
- Initial release
```
## Credits

* [Yeoman](http://yeoman.io/)
* [Yeoman's Ionic Framework generator](https://github.com/diegonetto/generator-ionic)

## Third Party Licences
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
