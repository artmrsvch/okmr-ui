export const createObjectWithLabel = (array: { name: string; _id: string }[]) =>
  array.map((item: { name: string; _id: string }) => ({
    ...item,
    label: item.name,
    value: item._id
  }));
