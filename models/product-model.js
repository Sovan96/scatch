const mongoose=require('mongoose');


const productSchema=mongoose.Schema({
    name:String,
    image:String,
    password:String,
    diccount:{
        type:Number,
        default:0
    },
    
    bgcolor:String,
    panelcolor:String,
    textcolor:String,
    price:Number

});

module.exports=mongoose.model("product",productSchema);