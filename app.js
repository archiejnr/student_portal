const express=require('express');
const app=express();
const routingController=require('./controllers/routingController');

app.set('view engine','ejs');

app.use('/static',express.static('./static'));

routingController(app);

app.listen(3000,()=>{
  console.log('listening to port 3000...');
});
