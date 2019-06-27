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
var data=[{
  heading:'This years school galla expected to rock',
  imagelink:'/static/dk.png',
  story:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and  will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,dislikes, or avoids.........'
},
{
     heading:'What distinguishes Phoenix College from other colleges',
     imagelink:'/static/dk.png',
     story:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.........'},
{
      heading:'Former Phoenix college student makes airwaves',
      imagelink:'/static/dk.png',
      story:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids.........'},
 ];
    res.render('home',{data:data});
  })
}
