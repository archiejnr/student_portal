const bodyParser=require('body-parser');
const urlencodedParser=bodyParser.urlencoded({extended:false});
const mongoose=require('mongoose');
const data=require('../models/data');


module.exports=function(app){
//this is a sample of the document tha is saved in the database
  let document=[
    {
  class : "Form 1",
  classTeacher : "Ms Samhungu",
  students : [
      {
          name: "natasha",
          courses : [{course:'Mathematics',grade:90,evaluation:'Can do better'},{course:'English',grade:85,evaluation:'Fair Perfomance'}],
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
    let messages={

    }
    let data={
      messages:{
        unread:[{
          message:document[0].students[0].messages[0].message
        }]
      },
      //try retriving this code from the backend instead of putting it here
     courses:[{course:'Mathematics',grade:90,evaluation:'Can do better'},{course:'English',grade:85,evaluation:'Fair Perfomance'}]
    }

    res.render('results',{data:data});
  });
  app.get('/',(req,res)=>{
    let messages={
      unread:[{
        message:document[0].students[0].messages[0].message
      }]
    }
    res.render('home',{data:messages});
  });
  app.get('/home',(req,res)=>{
    let messages={
      unread:[{
        message:document[0].students[0].messages[0].message
      }]
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
