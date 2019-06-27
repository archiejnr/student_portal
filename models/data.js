const mongoose=require('mongoose');
const schema=mongoose.Schema;

const dataSchema=new schema({
  name:'string',
  grade:Number,
  evaluation:String
});

var data=mongoose.model('student Info',dataSchema);

module.exports=data;
