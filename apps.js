// Apps.js
// Deploys all external verticles and modules needed by the application

var container = require("vertx/container");

// Web server
container.deployModule("io.vertx~mod-web-server~2.0.0-final", {
  port: 8080,
  host: "localhost"
});

container.deployVerticle('mindmaps.js');