import express from 'express';
import router from './router.js';
import path from 'path';
import reactViews from 'express-react-views';
import cookieParser from 'cookie-parser';


let app = express();

app.use('/',router);
app.use(cookieParser())

app.set('view engine', 'js');
app.use(express.static('public'));

app.engine('js', reactViews.createEngine());

let PORT = 3000
app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});
