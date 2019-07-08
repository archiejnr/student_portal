const bodyParser=require('body-parser');
const urlencodedParser=bodyParser.urlencoded({extended:false});


module.exports=function(app){

  app.get('/results',(req,res)=>{
    var data=[{
      course:"mathematics",
      grade:75,
      evaluation:'good result but can do better'
    },{
      course:"english",
      grade:100,
      evaluation:'great improvement from previous semester'
    },{
      course:"Shona",
      grade:100,
      evaluation:'wagona ramba ushishanda nesimba'
    },{
      course:"Geography",
      grade:100,
      evaluation:'Hardworking student keep it up'
    },{
      course:"Literatutre",
      grade:50,
      evaluation:'average perfomance can do better'
    },{
      course:"Art",
      grade:24,
      evaluation:'Very Bad grade archie can really do better'
    },]
    res.render('results',{data:data});
  });
  app.get('/home',(req,res)=>{
    res.render('home');
  });
  app.get('/messages',(req,res)=>{
    res.render('messages');
  })
}
