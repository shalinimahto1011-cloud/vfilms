const items = [
    { title: "Brand Films", desc: "Narratives that define your brand voice." },
    { title: "Documentaries", desc: "Human stories crafted with care." },
    { title: "Ad Films", desc: "Concept to cutdown for every platform." },
    { title: "Post Production", desc: "Edit, sound, color to perfection." },
    { title: "Art Direction", desc: "Visual grammar for every frame." },
    { title: "Photography", desc: "Stills that carry a story." },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">What we do</h2>
          <p className="text-center text-gray-600 mt-2">Crafting stories across mediums</p>
  
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl bg-white/80 shadow-sm p-6 hover:shadow-md transition">
                <h3 className="serif text-xl">{it.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  