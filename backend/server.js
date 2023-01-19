const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const routes = require("./routes");


const init = async () => {
  const server = Hapi.Server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  
  await server.register(Inert);
  server.route(routes);

  await server.start();
  console.log(`Server started on ${server.info.uri}`);
};

init()