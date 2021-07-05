const express = require('express')
const app = express()



class Product {
    constructor(id, name, image, price, stock) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.stock = stock
    }
}

const products = [
    new Product(1, 'Macbook Pro', '', 10000, 10),
    new Product(2, 'Macbook Air', '', 9000, 5),
]






app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/price', (req, res) => {
    const { min, max } = req.query;

    const result = products.filter(product => product.price >= min && product.price <= max)
    res.json(result)
})

app.get('/products/:id', (req, res) => {
    const result = products.filter(product => product.id == req.params.id)
    if (result.length > 0) {
        res.json(result[0])
    } else {
        res.status(404).json({})
    }
})

app.post('/addproducts', (req, res) => {
    const {name,image,price,stock} = req.body
    const product = new Product()
})



// localhost:3000/say/santi/27
app.get('/say/:name/:age', function (req, res) {
    res.send(`Hello ${req.params.name},${req.params.age}`)
})
// localhost:3000/search?name=santi&salary=99999
app.get('/search?', function (req, res) {
    res.send(`search: ${req.query.name},${req.query.salary}`)
})


const port = 3333
app.listen(port, () => {
    console.log(`Start port : ${port}`);
    console.log("Press Ctrl +C to quit.")
})