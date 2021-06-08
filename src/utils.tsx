export const getNumberOfItemsInCart = (items: any): number => {
  let amount = items.length;
  return amount;
};

export const calculateTotalPrice = (items: any) => {
  let total = 0;
  items.map(item => (total += item?.price));
  return total;

  // or we could do this too
  // items?.reduce((amount: number, item) => item.price + amount, 0);
};

export const getRating = (rating: number) => {
  return Array(rating)
    .fill("⭐")
    .map((_, i) => <p key={i}>⭐</p>);
};
