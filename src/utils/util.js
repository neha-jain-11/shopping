export const getTotalPrice = (data) => {
  return data.reduce((price, o) => (price + (o.price * o.quantity)), 0);
}