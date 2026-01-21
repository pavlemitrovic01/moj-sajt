// src/data/menu.ts

import { MenuCategory, MenuItem } from "../types";

export const MENU_ITEMS: MenuItem[] = [
  // 🍕 PICE
  {
    id: 1,
    name: "Margherita",
    description: "Pelat, mocarela, bosiljak",
    price: "890",
    category: MenuCategory.PIZZA,
    image: "/menu/margherita.png",
  },
  {
    id: 2,
    name: "Diavola",
    description: "Ljuta salama, paradajz sos, mocarela",
    price: "1050",
    category: MenuCategory.PIZZA,
    image: "/menu/diavola.png",
  },
  {
    id: 3,
    name: "Capricciosa",
    description: "Šunka, pečurke, masline",
    price: "1100",
    category: MenuCategory.PIZZA,
    image: "/menu/capricciosa.png",
  },
  {
    id: 4,
    name: "Prosciutto",
    description: "Parma šunka, mocarela",
    price: "1150",
    category: MenuCategory.PIZZA,
    image: "/menu/prosciutto.png",
  },
  {
    id: 5,
    name: "Quattro Formaggi",
    description: "Četiri vrste sira",
    price: "1200",
    category: MenuCategory.PIZZA,
    image: "/menu/quattro-formaggi.png",
  },
  {
    id: 6,
    name: "Vegetariana",
    description: "Povrće, paradajz sos, mocarela",
    price: "1050",
    category: MenuCategory.PIZZA,
    image: "/menu/vegetariana.png",
  },

  // 🍝 PASTE
  {
    id: 7,
    name: "Carbonara",
    description: "Pasta, panceta, jaje, parmezan",
    price: "990",
    category: MenuCategory.PASTA,
    image: "/menu/carbonara.png",
  },
  {
    id: 8,
    name: "Bolognese",
    description: "Ragu sos, parmezan",
    price: "950",
    category: MenuCategory.PASTA,
    image: "/menu/bolognese.png",
  },
  {
    id: 9,
    name: "Arrabbiata",
    description: "Ljuti paradajz sos",
    price: "900",
    category: MenuCategory.PASTA,
    image: "/menu/arrabbiata.png",
  },
  {
    id: 10,
    name: "Alfredo",
    description: "Pavlaka, parmezan",
    price: "980",
    category: MenuCategory.PASTA,
    image: "/menu/alfredo.png",
  },
  {
    id: 11,
    name: "Pesto",
    description: "Bosiljak, pinjoli, parmezan",
    price: "980",
    category: MenuCategory.PASTA,
    image: "/menu/pesto.png",
  },
  {
    id: 12,
    name: "Lasagne",
    description: "Ragu, bešamel, sir",
    price: "1100",
    category: MenuCategory.PASTA,
    image: "/menu/lasagne.png",
  },
];








