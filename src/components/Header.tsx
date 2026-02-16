import { NavLink, Link } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  "text-sm font-medium text-brand-ink hover:text-brand-navy transition " +
  (isActive ? "underline underline-offset-8 decoration-brand-gold" : "");

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur border-b border-black/10">
      <div className="h-[3px] bg-brand-gold" />
      <div className="bg-brand-cream/90 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-brand-navy">
            Pro Brothers Handyman
          </Link>

          <nav className="flex items-center gap-6">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>


            <Link
              to="/contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-brand-navy text-brand-cream text-sm font-semibold hover:opacity-90"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}