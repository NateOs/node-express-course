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

app.get('/api/v1/query/', (req, res) => {
const {search, limit} = req.query;
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter(product => product.name.startsWith(search))
   return  res.status(200).json(sortedProducts)
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, parseInt(limit))
   return  res.status(200).send(sortedProducts)
  }
  if (sortedProducts.length < 1) {
   return  res.status(200).json({ success:true, data:[]})
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  "Server running at port 5000";
});
