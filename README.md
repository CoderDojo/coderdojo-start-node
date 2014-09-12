# CoderDojo - Start Node

This is an introduction to server side programming in Node.js and was created for CoderDojo members.  

## Step 1 Install Node

Install Node from http://nodejs.org

## Step 2 Setup the project

Create the project folder 

````
mkdir coderdojo-start-node
````

Now create a folder called __public__, this is the folder whereyou will add the html, css and javascript code

````
cd coderdojo-start-node
mkdir public
````

## Install express 

__npm__ is Node Package Manager allows you to install Node Packages, to run a web server we are going to use a node package called __express__ will enable us to create a server easily that can accept web requests.

Now run 

````
npm install express
````

## Now lets create our Node.js file

Now in the home directory __coderdojo-start-node__ save a new file called __app.js__.  Inside app.js add the following code

````
var express = require('express');
var app = express();


app.get('/coderdojo', function(req, res){
  res.send('Be cool');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

````
This code creates your first server and first http call

## Run your code

From inside directory __coderdojo-start-node__ open a command terminal and run 

````
node app

````
We are running __app__ because the file is called __app.js__

You should see the following output from this command

````
$ node app
Listening on port 3000
````

This is tell you that a server has started on your machine at port __3000__ 

You can stop the server at any time by running ````CTRL+C````

## Open your browser

Navigate to 

````
http://localhost:3000
````

You get an error right! But remember in your code you told the server to reference __/coderdojo__ so you need to navigate to

````
http://localhost:3000/coderdojo
````

Now see what happens 

## We now need update app.js to read your html code from the public folder

Update app.js with the following code

````javascript
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/coderdojo', function(req, res){
  res.send('Be cool');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
```` 

## Now add your html and css code


````html
<html>
	<head>
		<style rel="stylesheet" type="text/css">
			body {
				background: blue;
				color: white;
				font-family: Tahoma;
			}

			h1 {
				color: pink;
			}

			div.code {
				width: 300px;
				padding: 5px;
				border: 1px solid black;
				background: lightgray;
				color: navy;
			}

			div.url {
				width: 300px;
				padding: 5px;
				border: 1px solid orange;
				background: navy;
				color: lightgray;
			}
		</style>
	</head>
	<body>
		<h1>CoderDojo Web Development</h1>
		<p>Welcome to CoderDojo DCU Introduction to Node.js</p>
		<h2>Install Node:</h2>
		<p>Go to <br/>
		<div class="url">http://nodejs.org</div>
		</p>
		<h2>Install express: </h2>
		<p><div class="code">npm install express</div>
		</p>
		<h2>To run your new website: </h2>
		<p><div class="code">node app</div>
		</p>
		<h2>Open your website: </h2>
		<p><div class="url">http://localhost:3000</div>
		</p>
	</body>
</html>
````

Now open your browser and navigate to

```` http://localhost:3000 ````









