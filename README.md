                                                       
          _____           _     _   _       _          
         |  ___|__   ___ | |_| | | | |_   _| |__       
         | |_ / _ \ / _ \| __| | |_| | | | | '_ \      
         |  _| (_) | (_) | |_| |  _  | |_| | |_) |     
         |_|  \___/ \___/ \__| |_| |_|\__,_|_.__/      
                                                       


# foothub-mobile

repository with POC mobile client src code

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
tns run android --bundle --hmr
```

#### Dev
```
# start backend services
$ cd ~/Projects/FOOTHUB/foothub; docker-compose build; docker-compose up
# start android emulator
$ sudo $ANDROID_HOME/tools/emulator -avd test
# start tns on debug
$ tns debug android --bundle --hmr
# open console on chromium
$ chromium-browser chrome-devtools://devtools/bundled/inspector.html?experiments=true&ws=localhost:40000
# open vue dev tools
$ npx vue-devtools
```
