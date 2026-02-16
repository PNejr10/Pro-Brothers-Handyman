import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2">
        <div>
          <div className="font-semibold">Pro Brothers Handyman</div>
          <p className="text-sm opacity-80 mt-2 max-w-prose">
           We provide dependable solutions homeowners and property managers can trust.

          </p>
        </div>

        <div className="sm:justify-self-end">
          <div className="text-sm font-semibold">Links</div>
          <div className="mt-2 flex gap-4 text-sm">
            <Link to="/" className="hover:opacity-80">Home</Link>
            <Link to="/contact" className="hover:opacity-80">Contact</Link>
          </div>
          <p className="text-xs opacity-70 mt-4">
            © {new Date().getFullYear()} Pro Brothers Handyman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}