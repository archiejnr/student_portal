const bodyParser=require('body-parser');
const urlencodedParser=bodyParser.urlencoded({extended:false});
const mongoose=require('mongoose');
const data=require('../models/data');


module.exports=function(app){

  let document=[
    {
  class : "Form 1",
  classTeacher : "Ms Samhungu",
  students : [
      {
          name: "natasha",
          courses : [],
          messages : [
              {
                  from: "Archbold",
                  message : "Hi there how are you"
              }
          ]
      },
      {
          name : "Sharon",
          courses: [],
          messages: []
      }
  ],
  "__v" : 1
}];

  app.get('/results',(req,res)=>{
    res.render('results',{data:data});
  });
  app.get('/',(req,res)=>{
    let messages={
      unread:0
    }
    res.render('home',{data:messages});
  });
  app.get('/home',(req,res)=>{
    let messages={
      unread:0
    }
    res.render('home',{data:messages});
  });
  //messages page
app.get('/messages',(req,res)=>{
    let messages={
      unread:[{
        message:document[0].students[0].messages[0].message
      }]

    }
  res.render('messages',{data:messages});
  })
}
