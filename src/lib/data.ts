const products = [
  {
    id: 1,
    product: "yellow eye pencil",
    price: 2400,
    rating: [5, 5, 3],
  },
  {
    id: 2,
    product: "Mellon soap",
    price: 1500,
    rating: [5, 4, 4],
  },
  {
    id: 1,
    product: "Allora Beauty",
    price: 5400,
    rating: [3, 4, 4, 5],
  },
  {
    id: 1,
    product: "massage oil",
    price: 1200,
    rating: [4, 4, 5],
  },
  {
    id: 1,
    product: "lipstick",
    price: 200,
    rating: [5, 3, 3],
  },
];

export const fetchProducts = async () => {
  const data = await fetch("");
  const res = await data.json();
  return res;
};
export const singleProduct = async (id: number) => {
  const data = await fetch(`/${id}`);
  const res = await data.json();
  return res;
};
export const fetchAppointments = async (id: number) => {
  const data = await fetch(`/${id}`);
  const res = await data.json();
  return res;
};
export const fetchSingleAppointment = async (id: number) => {
  const data = await fetch(`/${id}`);
  const res = await data.json();
  return res;
};
