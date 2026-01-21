import { useEffect, useState } from "react";
import { MenuCategory, MenuItem } from "../types";
import { supabase } from "../lib/supabase";
import { MenuItemDB } from "../types/menu-db";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>(MenuCategory.PIZZA);
  const [animatedId, setAnimatedId] = useState<number | null>(null);
  const [previewItem, setPreviewItem] = useState<MenuItem | null>(null);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from<MenuItemDB>("menu_items")
        .select("*")
        .order("name");

      if (error || !data) {
        console.error(error);
        setItems([]);
        setLoading(false);
        return;
      }

      const mapped: MenuItem[] = data.map(
        (item: MenuItemDB, index: number): MenuItem => ({
          id: index + 1, // frontend numeric id
          name: item.name,
          description: item.description,
          price: item.price.toString(),
          category: item.category as MenuCategory,
          image: item.image,
        })
      );

      setItems(mapped);
      setLoading(false);
    };

    fetchMenu();
  }, []);

  const filtered = items.filter(
    (item) => item.category === active
  );

  const handleAdd = (item: MenuItem) => {
    addToCart(item);
    setAnimatedId(item.id);
    setTimeout(() => setAnimatedId(null), 250);
  };

  return (
    <section id="menu" className="py-32 px-6 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center gap-4 mb-16">
          <button onClick={() => setActive(MenuCategory.PIZZA)}>
            PICE
          </button>
          <button onClick={() => setActive(MenuCategory.PASTA)}>
            PASTE
          </button>
        </div>

        {loading ? (
          <p className="text-center text-zinc-400">
            Učitavanje menija…
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((item: MenuItem) => (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <span>{item.price} RSD</span>
                <button onClick={() => handleAdd(item)}>
                  Dodaj
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


























