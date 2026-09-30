import {product} from './data.js';
import express from 'express';

const app = express();


app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href='/api/products'>Browser Products</a>`);
    });


app.get("/api/products",),(req,res)=>{
    res.send(200).json({count:products.length, data:products})
});   

app.use ((req, res) => {
    res.status(404).send("route not found");
});

app.listen(3333, () => console.log("prg4 is running at 3333"));






