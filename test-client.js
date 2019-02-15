var superagent = require("superagent"),
  log = console.log.bind(console);

(async function() {
  var response = await superagent.post(`http://127.0.0.1:4000/`, { input: 2 });
  console.log(response.status);
})();
