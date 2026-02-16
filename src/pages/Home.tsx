import { Link } from "react-router-dom";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <section className="bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(212,175,55,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_10%,rgba(11,31,58,0.14),transparent_55%)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-wide uppercase opacity-70">
              Property Maintenance & Management
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-brand-navy">
              Reliable service for{" "}
              <span className="relative inline-block">
                homes and businesses
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-brand-gold/80 rounded-full" />
              </span>
            </h1>
            <p className="text-base opacity-80 max-w-prose">
              Responsive maintenance, clear communication, and consistent quality—so your property stays in top shape.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="tel:5108386545">
                <Button>Call (510) 838-6545</Button>
              </a>
              <Link to="/contact">
                <Button variant="secondary">Request a quote</Button>
              </Link>
            </div>

            <div className="text-sm opacity-70">Serving: Residential • Commercial • Turnovers</div>
          </div>

          <div className="rounded-3xl border border-black/10 shadow-soft overflow-hidden aspect-[4/3]">
            <img
              src="/home-page.jpg"
              alt="Home Page Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide opacity-70">Services</p>
          <h2 className="text-3xl font-semibold tracking-tight mt-2">What we do?</h2>
          <p className="mt-2 text-sm opacity-80 max-w-prose">
            Specialized maintenance and repair services delivered with precision, accountability, and professionalism.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} icn={s.icn} />
          ))}
        </div>
      </section>

      <section className="bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide opacity-70">Why US?</p>
          <h2 className="text-3xl font-semibold tracking-tight mt-2">
            Simple, dependable, and easy to work with
          </h2>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Fast response times",
              "Clear estimates & updates",
              "Experienced crew",
              "Consistent quality checks",
              "Flexible scheduling",
              "Fair pricing",
            ].map((x) => (
              <li key={x} className="rounded-2xl border border-black/10 bg-white p-4 font-medium">
                {x}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <Link to="/contact" className="px-5 py-3 rounded-2xl bg-black text-white font-semibold">
              Get a quote
            </Link>
            <a href="tel:12135662524" className="px-5 py-3 rounded-2xl border font-semibold">
              Call now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}