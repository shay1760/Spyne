import express from 'express';
import { addProduct, listProducts, singleProduct } from '../controllers/productController.js';
import upload from '../middlewares/multer.js';
import authUser from '../middlewares/authUser.js';

const productRouter = express.Router();

// Route to add a product with multiple images
productRouter.post('/add', authUser, upload.array('images', 10), addProduct);


// Route to list products
productRouter.get('/list', listProducts);

// Route to get a single product by ID
productRouter.get('/single', singleProduct);

export default productRouter;
