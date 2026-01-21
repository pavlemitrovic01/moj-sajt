function Delivery() {
  return (
    <section
      id="delivery"
      className="py-32 px-6 bg-zinc-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-amber-500 uppercase tracking-widest text-sm">
            Dostava
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-serif">
            Brzo. Vruće. Pouzdano.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400">
            Svaka porudžbina se priprema sveže i stiže na vaša vrata
            u rekordnom roku – jer kvalitet ne trpi čekanje.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="
            group
            p-10
            rounded-2xl
            border border-white/10
            bg-zinc-900/40
            hover:border-amber-500/50
            transition
            duration-500
            text-center
          ">
            <div className="
              mx-auto
              w-16 h-16
              flex items-center justify-center
              rounded-full
              bg-amber-500/10
              text-amber-500
              text-2xl
              mb-6
              group-hover:scale-110
              transition
            ">
              🍕
            </div>

            <h3 className="text-xl font-serif mb-3">
              Sveže pripremljeno
            </h3>

            <p className="text-zinc-400 text-sm">
              Testo se mesi svakodnevno, a sastojci su pažljivo
              birani kako bi svaki zalogaj bio savršen.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="
            group
            p-10
            rounded-2xl
            border border-white/10
            bg-zinc-900/40
            hover:border-amber-500/50
            transition
            duration-500
            text-center
          ">
            <div className="
              mx-auto
              w-16 h-16
              flex items-center justify-center
              rounded-full
              bg-amber-500/10
              text-amber-500
              text-2xl
              mb-6
              group-hover:scale-110
              transition
            ">
              ⏱️
            </div>

            <h3 className="text-xl font-serif mb-3">
              Do 30 minuta
            </h3>

            <p className="text-zinc-400 text-sm">
              Prosečno vreme dostave je oko 30 minuta – brzo,
              efikasno i bez kompromisa.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="
            group
            p-10
            rounded-2xl
            border border-white/10
            bg-zinc-900/40
            hover:border-amber-500/50
            transition
            duration-500
            text-center
          ">
            <div className="
              mx-auto
              w-16 h-16
              flex items-center justify-center
              rounded-full
              bg-amber-500/10
              text-amber-500
              text-2xl
              mb-6
              group-hover:scale-110
              transition
            ">
              🛵
            </div>

            <h3 className="text-xl font-serif mb-3">
              Pouzdana dostava
            </h3>

            <p className="text-zinc-400 text-sm">
              Naši dostavljači znaju grad i uvek stižu sa osmehom
              – toplo i bezbedno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;



