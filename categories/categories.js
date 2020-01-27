

const Schema = require('./categories-schema.js');

class Categories {
  constructor(){
  }


  get(_id){
    if(_id){
      return Schema.findOne({_id});
    }
    else {
      return Schema.find({});
    }
  }

  create(record){
    let newRecord = new Schema(record);
    return newRecord.save();
  }

  update(_id,record){
    return Schema.findByIdAndUpdate(_id,record,{ new:true});
  }

  delete(_id){
    return Schema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;