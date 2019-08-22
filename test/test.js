const assert=require('assert');
const mongoose=require('mongoose');
const data=require('../models/data');

describe('db tests',()=>{
  //test data


//variable declarations
  var course1={
    courseName:'Geography',
    grade:0,
    TeacherComment:''
  }
  var student1={
    name:'natasha',
    courses:[],
    messages:[]
  }
  var student2={
    name:'Sharon',
    courses:[],
    messsages:[],
  }
  var student3 ={
    name:'Victor',
    courses:[]
  }
  var data1 = new data({
    class:'Form 1',
    classTeacher:'Ms Samhungu',
    students:[student1,student2]
  });
let message={
  from:'Archbold',
  messages:'Hi There how are you'
}
let data2={
  class:"test",
  classTeacher:'Mr Idris',
  message:'this is test data'
}
//adds a new class to the database
/*it('saves data to the db',(done)=>{
  data1.save().then(()=>{
    data.findOne({classTeacher:'Ms Samhungu'}).then((record)=>{
      assert(record.students.length===2)
    })
  })
  done();
})
*/
//just for testing purpose

it('saves test data to db',(done)=>{
  data2.save().then(()=>{
    data.findOne({classTeacher:'Mr Idris'}).then((record)=>{
      assert(record.message==='this is test data')
    })
  })
  done();
})
/*
//adding a new student to the class
it('adds a student in the database',(done)=>{
  data.findOne({classTeacher:'Ms Samhungu'}).then((result)=>{
    result.students.push(student3);
    result.save().then(()=>{
      data.findOne({classTeacher:'Ms Samhungu'}).then((result)=>{
        assert(result.students.length===3)
      })
    })
  })
  done();
});

//adds a course to a students courses Array
it('adds a course to all the sudents data',(done)=>{
  data.findOne({classTeacher:'Ms Samhungu'}).then((result)=>{
    result.students.forEach((student)=>{
      student.courses.push(course1);
    });
    result.save().then(()=>{
      data.findOne({classTeacher:'Ms Samhungu'}).then((result)=>{
        assert(result.students[0].courses.length===1)
      })
    })
  })
  done();
})*/
//updates information about a student
//seems like the findOne method can only find the key value combination on the outermost part of the object
/*
it('adds information to the students data',(done)=>{
  data.findOne({class:'Form 1'}).then((res)=>{
    res.students.forEach((student)=>{
      if (student.name==='Victor'){
        student.courses.pop();
        student.courses.push(course1);
      }
    })
      res.save().then(()=>{
        data.findOne({classTeacher:'Ms Samhungu'}).then((result)=>{
        let arr= result.students[2].courses.length
        assert(arr===1)
        })
      })
  })
  done();
})*/
it('gets messages from the db',(done)=>{
  data.findOne({classTeacher:'Ms Samhungu'}).then((res)=>{
    console.log(res)
    assert(res.students[0].messages.length===1);
  })
  done();
})
/*
//pushing a message to the message array in the class object
it('pushes a message to the messages array of the first student',(done)=>{
  data.findOne({classTeacher:'Ms Samhungu'}).then((res)=>{
    res.students[0].messages.push(message);
    res.save().then(()=>{
      data.findOne({classTeacher:'Ms Samhungu'}).then((result)=>{
      let arr= result.students[0].messages.length
      assert(arr===1)
      })
    })
})
  done();
})*/
})
