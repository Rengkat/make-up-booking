export const getProducts = async () => {
  const res = await fetch("https://make-up-app-backend.onrender.com/api/products");
  const products = await res.json();
  // console.log(products);
  return products;
};
