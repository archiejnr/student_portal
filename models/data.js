const mongoose=require('mongoose');
const schema=mongoose.Schema;

const courseSchema= new schema({
  courseName:String,
  grade:Number,
  TeacherComment:String
});

const messageSchema= new schema({
  from:String,
  messages:String
});

const studentSchema =new schema({
  name:String,
  courses:[courseSchema],
  messages:[messageSchema]
})

const classSchema=new schema({
  class:String,
  classTeacher:String,
  students:[studentSchema]
});

var data=mongoose.model('class info',classSchema);

module.exports=data;
