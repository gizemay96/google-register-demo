const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);


// Custom middleware to access POST methids.
// Can be customized for other HTTP method as well.
server.use((req, res, next) => {
  console.log("POST request listener");
  const body = req.body;
  console.log(req)
  console.log(body);
  if (req.method === "POST") {
    res.json = ({ message: 'Register is success !' })
    next();
  } else {
    next();
  }
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});