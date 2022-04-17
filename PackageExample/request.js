const axios = require("axios");

axios
  .get("https://www.google.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("We got the error", err);
  })
  .then(() => {
    console.log("All done");
  });
