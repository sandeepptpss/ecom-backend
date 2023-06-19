const  mongoose =require('mongoose');
const { Schema } = mongoose;
const productSchema =new Schema({
title: { type: String, unique: true, required: true  },
image:{type:String},
price:{type:Number },
camparePrice:{type:Number},
description:{type:String},
category:{type:String},
brand:{type:String}
});
exports.Product=mongoose.model('Product',productSchema)


