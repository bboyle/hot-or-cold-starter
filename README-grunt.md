Getting started with grunt
==========================

Installing the environment
--------------------------

1. install node (and npm): http://nodejs.org/
2. open a terminal (OSX/Linux) or command prompt (Windows)
3. verify node is installed by typing `node -v`
4. verify npm is installed by typing `npm -v`
5. install grunt with this command: `npm install -g grunt-cli`

Setup your project work area
----------------------------

1. change to the directory where your hot-or-cold-starter project folder
2. create a package.json file by running `npm init`
  1. press enter to accept the default values (you can edit them if you wish)
  2. type 'grunt test' for the _test command_
  3. review the package.json file that has been created
  4. review the 'node_modules' folder that was created to store package files installed with npm
3. install local grunt for this project: `npm install --save-dev grunt`
  1. review package.json and see the new `devDependencies` listed

Setup your grunt workflow
-------------------------

1. install the jshint plugin to check javascript files: `npm install --save-dev grunt-contrib-jshint`
2. create a new file named [Gruntfile.js](https://github.com/bboyle/hot-or-cold-starter/blob/da6827d8e7f745c1dbf99ff8235ce91d2f00a0e0/Gruntfile.js)
