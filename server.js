// Import packages
var express = require('express');
var exphbs = require('express-handlebars');
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

// Init express server and port
var app = express();
var PORT = process.env.PORT || 8000;

// Set template engine to handlebars and default layout to main
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from public directory
app.use(express.static("public"));


// Use imported routes for server
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
