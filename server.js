import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

/* old for GraphQL */
// import Schema from './server/api/schema';
/* easy api setup thanks to Alessandro */
import * as api from './server/api/http';

const app = express();
const port = 8081;

app.set('view engine', 'ejs');
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json()); // handle Content-Type 'application/json' requests
app.use(bodyParser.text()); // handle Content-Type 'text/plain' requests

// Static middleware is not needed when using webpack-dev-server (npm start).
app.use(express.static('./views'));
app.use(require('./accounts'));
/**
 * API Endpoints
 */
 // let userObj = {
 //   username: 'Cyrus',
 //   password: 'Batman'
 // }

 // Target
 app.get('/api/0/hope', api.getHope);

app.get('/', function (req, res) {
    if(req.session.user) console.log(req.session.user);
    res.render('index', {
      user: JSON.stringify(req.session.user || null )
    });
});



app.listen(port, () => console.log('SERVER RUNNING ====> http://localhost:' + port));
