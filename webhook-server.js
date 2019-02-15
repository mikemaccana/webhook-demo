const express = require("express"),
  app = express(),
  superagent = require("superagent"),
  log = console.log.bind(console),
  bodyParser = require("body-parser"),
  port = 4000;

const print = function(object) {
  return JSON.stringify.apply(JSON, [object, null, 2]);
};

function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

var clientFunction = async function(input) {
  await sleep(6);
  log(`Woo I'm a webbook! if you're reading this I'm running`);
  return input * 2;
};

// Handle POST bodies
app.use(bodyParser.json());

app.post("/", async function(request, response) {
  log(`Got a request! ${response.body}`);
  let { input } = request.body;

  // It's a webhook so everything is awesome
  response.end();
  log(`Finished response to webhook but still working`);

  clientFunction(input);
  log(`Started out of band function`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
