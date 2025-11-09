/**
 * Navbar component for site navigation.
 * Includes quick links to sections: Services, Their Stories, Our Story,
 * The Story of Joy Sharma (scrolls to Reel), and Varnan.
 * Also includes “Let's Talk” button linking to Contact section.
 */


export default function Navbar() {
    return (
      <header className="w-full">
        <nav className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-semibold tracking-tight">
            <span className="text-[var(--brand-red)] serif font-bold">V</span> Films
          </a>
  
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#services" className="hover:text-[var(--brand-red)]">Services</a></li>
            <li><a href="#stories" className="hover:text-[var(--brand-red)]">Their Stories</a></li>
            <li><a href="#about" className="hover:text-[var(--brand-red)]">Our Story</a></li>
            <li><a href="#varnan" className="hover:text-[var(--brand-red)]">Varnan</a></li>
          </ul>
  
          <a href="#contact" className="inline-flex items-center rounded-full bg-[var(--brand-red)] text-white px-4 py-2 text-sm hover:opacity-90">
            Let's Talk
          </a>
        </nav>
      </header>
    );
  }
  