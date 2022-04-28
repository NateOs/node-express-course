const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  // res.status(200).json(products);
  res.send('<h1>Home Page</h1><a href="api/products">get products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.status(200).json(newProducts);
});

app.listen(5000, () => {
  "Server running at port 5000";
});
