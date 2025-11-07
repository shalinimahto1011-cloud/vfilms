export default function Footer() {
    return (
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} V Films. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-[var(--brand-red)]">Services</a>
            <a href="#stories" className="hover:text-[var(--brand-red)]">Their Stories</a>
            <a href="#about" className="hover:text-[var(--brand-red)]">Our Story</a>
            <a href="#varnan" className="hover:text-[var(--brand-red)]">Varnan</a>
          </div>
        </div>
      </footer>
    );
  }
  