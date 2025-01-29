// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();
export default class productController extends ProductModel{
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
  const {name}= req.body
   const products = this.searchResult(name)
  //  console.log(products)
    if(products){
     return res.render('searchResults',{products})
    }
  };
}
