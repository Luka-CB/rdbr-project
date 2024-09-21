export const formatPrice = (price: number) => {
  return price?.toLocaleString("en-US").replace(/,/g, " ");
};
