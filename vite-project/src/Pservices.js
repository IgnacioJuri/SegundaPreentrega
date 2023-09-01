const products = [
  { id: "1", name: "Hummus Clásico", price: 900, category: "hummus" },
  { id: "2", name: "Hummus Picante", price: 900, category: "hummus" },
  { id: "3", name: "Hummus Ajo Negro", price: 900, category: "hummus" },
  { id: "4", name: "Hummus Pistacho", price: 1200, category: "hummus" },
  { id: "5", name: "Tahini", price: 1700, category: "tahini" },
  { id: "6", name: "Garbanzo Sin Piel", price: 500, category: "garbanzo" },
];

// getProduct
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // buscamos el producto por id
      const product = products.find((p) => p.id === id);

      // si existe el producto
      if (product) {
        resolve(product);
      } else {
        reject("No existe el producto");
      }
    }, 1000);
  });
};

// getProducts() -> devuelve todos los productos
// getProducts("phones") -> devuelve todos los productos de la categoría phones
// getProducts("tablets") -> devuelve todos los productos de la categoría tablets
// getProducts("notebooks") -> devuelve todos los productos de la categoría notebooks
export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Si category existe filtramos por categoría
      // Si category no existe devolvemos todos los productos

      const productsFiltered = category
        ? products.filter((product) => product.category === category)
        : products;

      resolve(productsFiltered);
    }, 1000);
  });
};