//$location.url( "/search_results"), {user_name: user_name};



Deploy to Heroku:
  Bower

  Angular-seed uses bower (check package.json: it’s already listed there as a devDependency), but in order for Heroku to use it, we’ll need to add it to the dependencies section too:

  npm install bower --save

  We also need to update the path to bower in package.json:

  "postinstall" : "./node_modules/bower/bin/bower install",

  Express as a web server

  Angular-seed uses http-server as the web server to test your changes, but I didn’t find a way to use that on Heroku. Instead, I just add a simple Express based static files server.

  First we’ll add Express as a node module:

  npm install express --save

  Next create a new file in the root of your project named app.js to serve static files from angular-seed’s app folder:

  var express = require('express');
  var app = express();
  app.use(express.static(__dirname + '/app'));
  app.listen(process.env.PORT || 3000);

  Define a Procfile

  We need to tell Heroku what it needs to do to start your app: create a file named Procfile in the root of your project and add:

  web: node app.js

  This tells Heroku to launch node using the app.js file.

  Heroku

  We’re ready to push our app to Heroku. Log in to Heroku and create an app. Install the Heroku toolbelt on your computer so we can call heroku commands from the command line.

  To send your project to Heroku, we’ll need to add Heroku as a git remote

  heroku git:remote -a <your_app_name>

  Next, commit all the changes we’ve made in the local project and send your project to Heroku:

  git add .
  git commit
  git push -u heroku master

  In the terminal you’ll see your app being deployed, compiled and started on Heroku. You can now view it using the shortcut command ‘heroku open‘.

Add Bootstrap:
  