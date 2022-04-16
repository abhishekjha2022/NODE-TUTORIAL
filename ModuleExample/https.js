const { send } = require("./request");
const { read } = require("./response");

function MakeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = MakeRequest("https://www.google.com", "hello there");
console.log(responseData);
