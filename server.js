const fastify = require('fastify')();
const cors = require('@fastify/cors');

const PORT = process.env.PORT || 5000

fastify.register(cors, { 
  origin: (origin, cb) => {
    const hostname = new URL(origin).hostname
    if(hostname === "localhost"){
      cb(null, true)
      return
    }
    cb(new Error("Not allowed"), false)
  }
})

fastify.register(require('./routes/posts'))

const startServer = async () => {
  try {
    await fastify.listen({port: PORT});
    console.log(`Running on port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer()