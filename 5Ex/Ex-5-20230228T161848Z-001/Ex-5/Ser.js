var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var helmet = require('helmet');

app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());

app.listen(4000,()=> {
    console.log("Application Started And Listening On Port 4000");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/home.html')
});

app.post('/reg', async(req, res) => {
    var count = req.body.box.split('').length;
    console.log(count);
    return res.send('Length : ' + req.body.box.split('').length);
  })