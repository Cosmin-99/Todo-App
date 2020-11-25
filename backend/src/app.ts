import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/todoRoutes';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(router);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(5000, () => console.log('Server running on port', 5000))