import http from 'http';
import {review,items } from "./data.js";

const server = http.createServer((req, res) => {
    const products = {
        id: 1,
        name: "Mobile",
        price: 4000,
        rating: 4.7,
        review: 225,
    };

    const items = 
      [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 1999,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "desc": "Comfortable wireless headphones with clear sound and long battery life."
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "price": 2499,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "desc": "Stylish smartwatch with fitness tracking and notifications."
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "price": 3299,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "desc": "Lightweight and comfortable shoes designed for daily running."
  },
  {
    "id": 4,
    "name": "Laptop Backpack",
    "price": 1499,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    "desc": "Spacious backpack with a padded compartment for your laptop."
  },
  {
    "id": 5,
    "name": "Bluetooth Speaker",
    "price": 1799,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    "desc": "Portable Bluetooth speaker with powerful and clear sound."
  },
  {
    "id": 6,
    "name": "Gaming Mouse",
    "price": 1299,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db",
    "desc": "High precision gaming mouse with an ergonomic design."
  },
  {
    "id": 7,
    "name": "Coffee Mug",
    "price": 499,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    "desc": "Premium ceramic coffee mug for your daily coffee."
  },
  {
    "id": 8,
    "name": "Sunglasses",
    "price": 999,
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    "desc": "Stylish sunglasses with UV protection."
  },
  {
    "id": 9,
    "name": "Water Bottle",
    "price": 699,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    "desc": "Reusable water bottle suitable for gym, college, and travel."
  },
  {
    "id": 10,
    "name": "Mechanical Keyboard",
    "price": 3499,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    "desc": "Mechanical keyboard with responsive keys for gaming and typing."
  }
]

    if (req.url === "/api/products") {
        //res.end(JSON.stringify(products));
        res.end(JSON.stringify(items));
    }
    else if (req.url === "/api/reviews") {
      res.end(JSON.stringify(review));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(3000, () => console.log("prg4 is running "));