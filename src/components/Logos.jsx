/**
 * Displays a horizontal grid of client logos.
 * Used to showcase brand associations or partnerships.
 */


const logos = [
    "https://placehold.co/120x40?text=Client+1",
    "https://placehold.co/120x40?text=Client+2",
    "https://placehold.co/120x40?text=Client+3",
    "https://placehold.co/120x40?text=Client+4",
    "https://placehold.co/120x40?text=Client+5",
    "https://placehold.co/120x40?text=Client+6",
  ];
  
  export default function Logos() {
    return (
      <section className="mt-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 items-center gap-6 opacity-80">
            {logos.map((src, i) => (
              <img key={i} src={src} alt={`logo-${i}`} className="mx-auto h-8 w-auto" />
            ))}
          </div>
        </div>
      </section>
    );
  }
  