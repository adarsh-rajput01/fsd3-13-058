const products = [
    { id :1,name:'marker', qty: 100, price: 15},
    { id :2,name:'pen', qty: 200, price: 10},
]

let nextId = 3;

export const getAllProducts = (req, res) => {
    return products;
}

export const addProdcut = (item) => {
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
};
