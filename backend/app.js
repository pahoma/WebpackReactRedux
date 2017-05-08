'use strict';

const http = require('http'),
      conf = require('./config'),
      cluster = require('cluster'),
      express = require('express'),
      numCPUs = conf.server.workers || require('os').cpus().length, /* //TODO get value from config */
      cookieParser = require( 'cookie-parser' ),
      app = express();

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    console.log(`Worker ${process.pid} started`);
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    // You can test workers by command - for i in `seq 1 100`; do curl http://localhost:3010; done
    http.createServer(app).listen(conf.httpPort);
}

// Middleware

require('./api')(app);

app.use(function(req, res, next){
    res.status(200).send(`\n Hey there!!! You served by worker - ${process.pid}`);
});
