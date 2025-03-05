const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0",
    title: "Node Server API",
    description: "Node Server API with sequelize and MySQL",
  },
  servers: [
    {
      url: "http://localhost:6868",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  }
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app/routes/device.routes.js", "./app/routes/category.routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server");
});
