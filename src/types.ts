// src/types.ts

export enum MenuCategory {
  PIZZA = "PIZZA",
  PASTA = "PASTA",
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string; // ✅ STRING — KONAČNO ISPRAVNO
  category: MenuCategory;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}



