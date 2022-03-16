//node express.js

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(process.env.port || 3000);

//for static files
app.use("/img", express.static('./img/'));
app.use("/js", express.static('./js/'));
app.use("/css", express.static('./css/'));

console.log('Running at Port 3000');