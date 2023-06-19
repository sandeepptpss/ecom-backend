const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
router.post('/', upload.single('image'), productController.createProduct);
router.get('/', productController.getAllProduct);

router.get(':id/', productController.getProduct)
exports.router = router;  


