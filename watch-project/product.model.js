import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
    productname:{type:String},
    categoryname:{type:String},
    description:{type:String},
    price:{type:String},
    stock:{
        
        size_15:{type:String},
        size_16:{type:String},
        size_17:{type:String},
        size_18:{type:String},
    },
  
    banner:{type:String},
    images:{type:Object}
})
export default mongoose.model.products||mongoose.model("products",product_schema)