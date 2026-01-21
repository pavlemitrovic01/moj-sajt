import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const {
    items,
    totalPrice,
    removeFromCart,
    closeCart,
  } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) return null;

  const canSubmit =
    name.trim() !== "" &&
    phone.trim() !== "" &&
    address.trim() !== "" &&
    !isSubmitting;

  const handleSubmit = () => {
    if (!canSubmit) return;

    setIsSubmitting(true);
    setSuccess(true);

    // frontend-only success flow
    setTimeout(() => {
      items.forEach((item) => removeFromCart(item.id)); // PRAŽNJENJE KORPE
      closeCart();
      setIsSubmitting(false);
      setSuccess(false);
      setName("");
      setPhone("");
      setAddress("");
    }, 2000);
  };

  if (success) {
    return (
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-serif text-amber-500 mb-2">
          Porudžbina uspešno poslata 🎉
        </h3>
        <p className="text-zinc-400">
          Hvala! Vaša porudžbina je primljena.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 border-t border-white/10 pt-6">
      <h3 className="text-lg font-serif mb-4">Podaci za dostavu</h3>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Ime i prezime"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        />

        <input
          type="tel"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        />

        <input
          type="text"
          placeholder="Adresa"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-lg">
          Ukupno:{" "}
          <span className="text-amber-500 font-semibold">
            {totalPrice} RSD
          </span>
        </span>

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={`px-6 py-2 rounded font-semibold transition ${
            canSubmit
              ? "bg-amber-500 hover:bg-amber-600 text-black"
              : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Slanje..." : "Pošalji porudžbinu"}
        </button>
      </div>
    </div>
  );
}

















