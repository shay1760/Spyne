import productModel from '../models/productModel.js';

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, models, imageUrls} = req.body;

        const newProduct = new productModel({
            name,
            description,
            price,
            category,
            subCategory,
            model: models,
            image: imageUrls // Expecting imageUrls to be an array of strings (URLs)
        });
        
        await newProduct.save();

        res.status(201).json({ success: true, message: "Product added successfully!", product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error. Please try again." });
    }
};

const listProducts=async(req, res)=>{
    try {
        const products=await productModel.find({});
        res.json({success:true, products})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const singleProduct = async (req, res) => {
    try {
        
        const {productId}=req.body
        const product=await productModel.findById(productId)
        res.json({success:true, product})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};




export {listProducts, addProduct, singleProduct}

  
