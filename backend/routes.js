const { index } = require("./handler.js");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: index,
  },
  {
    method: "GET",
    path: '/{params*}',
    handler: {
        directory: {
            path: 'src',
        }
    }
  }
];

module.exports = routes;