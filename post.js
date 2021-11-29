const request = require("request");

const json = {
  nombre: "Alan",
  apellido: "Gallardo",
};

request.post(
  {
    url: "http://localhost:3002/users",
    body: json,
    json: true,
  },
  function (error, response, body) {
    console.log(body);
  }
);
