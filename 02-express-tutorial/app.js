const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  // res.status(200).json(products);
  res.send('<h1>Home Page</h1><a href="api/products">get products</a>');
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(product => product.id === parseInt(productID));
  console.log(singleProduct);
  
  if (!singleProduct) {
    res.status(404).send('<h1>Product not found</h1><a href="/">Go back</a>');
  } 
    res.status(200).json(singleProduct);
  

});

app.listen(5000, () => {
  "Server running at port 5000";
});
