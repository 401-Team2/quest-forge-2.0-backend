const app = require('./app');
const http = require('http');

const port = process.env.PORT || 3000;

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Handle server errors
server.on('error', onError);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges to run`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use by another process`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
