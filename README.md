# DOMINION

![Dominion Logo](images/DominionLogo.jpg)

### Description:
This is a web application that simulates the card game Dominion published by Rio Grande Games.

### Team Members:
- Heather Conklin ([heath3conk](https://github.com/heath3conk)): VP of Production and CTO. Taxonomist of ideal cake/beverage consumption.
- James O'Neal ([jamesponeal](https://github.com/jamesponeal)): VP of Engineering and CIO. Associate whiskey drinker and cake eater.

### Team Guidelines:
- Checkins as needed.
- If you're stuck, ask for help.
- Trello board will be used to track tasks and progress.
- Whiskey and chocolate cake breaks are encouraged.

## Express app initial setup
Running notes about getting this sucker going...

- `node -v` confirms Node is installed...my version is v6.3.1
- `sudo npm install express-generator -g` global install of Express generator
- Two ways to get your minimal Express skeleton: 
  - `express .` This should create the skeleton in the current folder. 
  - `express dominion` Creates folder & subfolders (some of them junk we'll have to remove). I did this first, then did a `git init` from inside the resulting root directory. Then I checked out a branch, added & committed all the express stuff, then ran `git remote add origin <this github repo url>` and did a `git pull origin master` to get all the stuff that was already here.
- `npm install` fetches the dependencies listed in the auto-generated package.json file
- `npm install --save-dev nodemon mocha chai supertest jasmine protractor` adds dependencies for tests
- `npm install --save monk` to read from Mongo database
- replace the "scripts" section of the `package.json` file with this: "scripts": { "start": "node ./bin/www", "tdd": "nodemon --watch ./ --exec 'mocha test/unit' --delay 1 ./bin/www", "test": "npm run test:wmu && npm run test:unit && npm run test:integration && npm run test:acceptance", "test:acceptance": "NODE_ENV=test protractor test/acceptance/config.js", "test:integration": "NODE_ENV=test mocha test/integration --recursive", "test:unit": "NODE_ENV=test mocha test/unit/ --recursive", "test:wmu": "webdriver-manager update" } This provides the following commands:
  - `npm test` to run all the tests: unit tests first, then integration tests, then acceptance tests. **Run this first (whenever you start working on the project for the day) to make sure everything is set up correctly. After that, you can run whatever subset of tests you're actually working on.**
  - `npm run tdd` will monitor the project directory and run the unit tests every time a file is updated. (type `rs` in the command line to restart nodemon - may need to restart to see certain changes)
  - `npm run test:unit` to run only the unit tests; also `npm run test:integration` and `npm run test:acceptance`
- `npm install --save method-override` allows you to use PUT and DELETE instead of just GET and POST
  
