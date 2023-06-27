const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });


router
.post('/', upload.single('image'), productController.createProduct)
.get('/', productController.getAllProduct)
.get('/:id',  productController.getProduct)
.put('/:id', productController.updateProduct)

exports.router = router;  


