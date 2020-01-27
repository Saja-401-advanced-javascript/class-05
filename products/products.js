

const Shema = require('./products-schema.js');

class Products {
  constructor(){
  }

  get(_id){
    if(_id){
      return Shema.findOne({_id});
    }
    else {
      return Shema.find({});
    }
  }

  create(record){
    let newRecord = new Shema(record);
    return newRecord.save();
  }

  update(_id,record){
    return Shema.findByIdAndUpdate(_id,record,{ new:true});
  }

  delete(_id){
    return Shema.findByIdAndDelete(_id);
  }

}
module.exports = Products;