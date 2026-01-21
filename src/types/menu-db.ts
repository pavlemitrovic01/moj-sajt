export interface MenuItemDB {
  id: string; // uuid
  name: string;
  description: string;
  price: number;
  image: string;
  category: "PIZZA" | "PASTA";
}
