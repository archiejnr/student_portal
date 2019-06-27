const assert=require('assert');
const mongoose=require('mongoose');
const data=require('../models/data');

describe('db tests',()=>{
  //test data
  var data1;

//saves data to the database
it('saves data to the db',(done)=>{
  data1=new data({
        name:'Charity',
        grade:100,
        evaluation:"Excellent Result"
      });
      data1.save().then(()=>{
        assert(data1.isNew===false)
      })
      done()
  });
})
