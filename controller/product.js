const fs = require('fs');
const path = require('path');
const model = require('../model/product');
const mongoose = require('mongoose');
const multer = require('multer');
const express = require('express');
const app = express();
const Product = model.Product;

exports.createProduct = async (req, res) => {
  // console.log(req.file, req.body);
  if (!req.file) {
    return res.status(400).send('No image file uploaded.');
  }
  try {
    const title = req.body.title;
    const description = req.body.description;
    const image = req.file.path;
    const price = req.body.price;
    const brand = req.body.brand; 
    const camparePrice = req.body.camparePrice;
    const category = req.body.category; 

    const newProduct = new Product({
      title: title,
      description: description,
      image: image,
      price: price,
      camparePrice: camparePrice,
      brand: brand,
      category: category
    });

    const success = await newProduct.save();
    if (success) {
      return res.send({ code: 200, message: 'add success' });
    } else {
      return res.send({ code: 404, message: 'Service error' });
    }
  } catch (err) {
    res.send({ code: 404, message: 'Internal Server Err.' });
  }
};

exports.getProduct = async (req, res)=>{
  const id = req.params.id;
  console.log({id})
  const product = await Product.findById(id);
  res.json(product);

}

exports.getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
