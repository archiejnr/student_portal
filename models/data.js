const mongoose=require('mongoose');
const schema=mongoose.Schema;

const classSchema=new schema({
  classTeacher:String,
  students:[studentSchema]
});

const studentSchema =new schema({
  name:String,
  courses:[courseSchema],
  messages:messageSchema
})

const messageSchema= new schema({
  from:String,
  message:Array
});

const courseSchema= new schema({
  courseName:String,
  grade:Number,
  TeacherComment:String
});

var data=mongoose.model('class info',classSchema);

module.exports=data;
