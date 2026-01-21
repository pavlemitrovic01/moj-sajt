// src/types.ts

export enum MenuCategory {
  PIZZA = "PIZZA",
  PASTA = "PASTA",
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string; // 🔥 MORA STRING
  category: MenuCategory;
  image: string;
}



