const express = require("express");

const app = express();

 const products = [
   { id: 1, name: "Laptop", category: "electronics" },
   { id: 2, name: "T-Shirt", category: "clothes" },
   { id: 3, name: "Phone", category: "electronics" },
 ];

 app.get("/products", (req, res) => {
   const {category} = req.query;

   if (category) {
     const filterCategory = products.filter((u) => u.category === category);
     return res.status(200).json(filterCategory);
   }

   res.status(200)
 });

 app.get('/products/:id', (req, res) => {
   const id = Number(req.params.id);

   const product = products.find((p) => p.id === id);

   if(!product){
     return res.status(404).json({error: 'product not found'})
   }

   res.status(200).json(product)
 })

app.listen(3000, () => {
  console.log("Server running on port 3000");
});