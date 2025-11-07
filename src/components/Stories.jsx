const quotes = [
    { q: "They listened first, then built a film that felt ours.", by: "Client A" },
    { q: "Professional and patient. The story found its rhythm.", by: "Client B" },
    { q: "From brief to final cut, thoughtful at every step.", by: "Client C" },
  ];
  
  export default function Stories() {
    return (
      <section id="stories" className="py-14 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Their Stories</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {quotes.map((c) => (
              <figure key={c.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <blockquote className="italic serif">“{c.q}”</blockquote>
                <figcaption className="mt-3 text-sm text-gray-600">— {c.by}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }
  