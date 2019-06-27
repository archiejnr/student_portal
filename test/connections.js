const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

before((done)=>{
  mongoose.connect('mongodb://localhost/studentProject',{useNewUrlParser:true});
  mongoose.connection.once('open',()=>{
    console.log('listening on localhost');
      done();
  }).on('err',(err)=>{
    console.log('server disconnected',err);
  });
});
