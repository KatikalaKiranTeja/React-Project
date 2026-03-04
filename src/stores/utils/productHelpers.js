export const getProductId = (item, index) => String(item.id ?? index + 1);

export const getProductBrand = (item) =>
  item.company || item.brand || item.author || item.product || "Brand";

export const getProductModel = (item) => item.model || item.title || item.type || "Item";

export const getProductTitle = (item) => `${getProductBrand(item)} ${getProductModel(item)}`;

export const getProductImage = (item) => {
  if (!item.image) return "";
  if (item.image.startsWith("http") || item.image.startsWith("/")) return item.image;
  return `/${item.image}`;
};
