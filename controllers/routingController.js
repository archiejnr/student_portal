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
                  from: "Victor",
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
    let data={
      messages:{
      unread:1//to be extracted from the server
      },
      profile:{
      userName:'Archie'//to be extracted from the server
    },
    courses:[{course:'Mathematics',grade:90,evaluation:'Can do better'},{course:'English',grade:85,evaluation:'Fair Perfomance'}]
    }

    res.render('results',{data:data});
  });

  //the default page that a user arrives on
  app.get('/',(req,res)=>{

    let data={
      messages:{
      unread:1//to be extracted from the server
      },
      profile:{
      userName:'Archie'//to be extracted from the server
    }
    }
    res.render('home',{data:data});
  });
  app.get('/home',(req,res)=>{
    let data={
      messages:{
      unread:1//to be extracted from the server
      },
      profile:{
      userName:'Archie'//to be extracted from the server
    }
    }
    res.render('home',{data:data});
  });
  //messages page
app.get('/messages',(req,res)=>{
    let data={
      messages:{
      unread:1,//to be extracted from the server
      message:document[0].students[0].messages[0].message,
      from:document[0].students[0].messages[0].from
      },
      profile:{
      userName:'Archie'//to be extracted from the server
    }
    }
  res.render('messages',{data:data});
});

  //login page
app.get('/login',(req,res)=>{
    res.render('login')
});
}
/*
let UniformData={
    messages:{
    read:null,
    unread:null
    },
    profile:{
    userName:null
  }
}

*/
