const products = [
  { id: 1, name: "marker", qty: 100, price: 15 },
  { id: 2, name: "pen", qty: 200, price: 10 },
];

let nextId = 3;

export const getAllProducts = () => products;

export const addProduct = (item) => {
  const newProduct = { ...item, id: nextId };
  nextId += 1;
  products.push(newProduct);
  return newProduct;
};

export const deleteProduct = (pid) => {
  const productId = Number(pid);

  if (Number.isNaN(productId)) {
    return false;
  }

  const index = products.findIndex((product) => product.id === productId);

  if (index === -1) {
    return false;
  }

  return products.splice(index, 1)[0];
};

export const updateProduct = (pid, updatedItem) => {
  const productId = Number(pid);

  if (Number.isNaN(productId)) {
    return false;
  }

  const index = products.findIndex((product) => product.id === productId);

  if (index === -1) {
    return false;
  }

  const updatedProduct = { ...products[index], ...updatedItem, id: productId };
  products[index] = updatedProduct;
  return updatedProduct;
};

export const getProductById = (pid) => {
  const productId = Number(pid);

  if (Number.isNaN(productId)) {
    return false;
  }

  return products.find((product) => product.id === productId) || false;
};
