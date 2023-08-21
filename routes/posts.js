const { getPostsHandler } = require("../controllers/handlers/posts");
const { getPostsSchema } = require("../controllers/schemas/posts");

const getPostsOpts = {
  schema: getPostsSchema,
  handler: getPostsHandler,
};

const getPostOpts = {
  schema: getPostSchema,
  handler: getPostHandler,
};

const postRoutes = (fastify, options, done) => {
  fastify.get('/api/posts', getPostsOpts);
  fastify.get('/api/posts/:id', getPostOpts);

  done();
};

module.exports = postRoutes