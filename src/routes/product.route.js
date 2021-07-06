const router = require("express").Router;

class Product {
  constructor(id, name, image, price, stock) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.stock = stock;
  }
}

const products = [
  new Product(1, "Macbook Pro", "", 10000, 10),
  new Product(2, "Macbook Air", "", 9000, 5),
];

let count = products.length;

router.get("/products", (req, res) => {
  res.json(products);
});

router.get("/products/price", (req, res) => {
  const { min, max } = req.query;

  const result = products.filter(
    (product) => product.price >= min && product.price <= max
  );
  res.json(result);
});

router.get("/products/:id", (req, res) => {
  const result = products.filter((product) => product.id == req.params.id);
  if (result.length > 0) {
    res.json(result[0]);
  } else {
    res.status(404).json({});
  }
});

router.post("/products", (req, res) => {
  const { name, price, stock } = req.body;
  count = count + 1;
  const product = new Product(count, name, "", price, stock);
  products.push(product);
  res.status(201).json(product);
});

// localhost:3000/say/santi/27
router.get("/say/:name/:age", function (req, res) {
  res.send(`Hello ${req.params.name},${req.params.age}`);
});
// localhost:3000/search?name=santi&salary=99999
router.get("/search?", function (req, res) {
  res.send(`search: ${req.query.name},${req.query.salary}`);
});

router.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id == id);
  if (index !== -1) {
    const { name, price, stock } = req.body;
    const product = new Product(Number(id), name, "", price, stock);
    products[index] = product;
    res.json(product);
  } else {
    res.status(404).json({});
  }
});

router.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((product) => product.id == id);
  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).json();
  } else {
    res.status(404).json({});
  }
});
