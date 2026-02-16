import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(212,175,55,0.16),transparent_55%),radial-gradient(900px_circle_at_90%_10%,rgba(11,31,58,0.12),transparent_55%)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-wide uppercase opacity-70">
              About Pro Brothers Handyman
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-brand-navy">
              Reliable home repair and maintenance in{" "}
              <span className="relative inline-block">
                Concord & Walnut Creek
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-brand-gold/80 rounded-full" />
              </span>
            </h1>

            <p className="text-sm sm:text-base opacity-80 max-w-prose">
              Pro Brothers Handyman is a reliable and professional home repair and maintenance service proudly serving
              Concord, Walnut Creek, and surrounding areas. Founded by Shahid Azizi, the company is built on
              accountability, precision, and quality workmanship.
            </p>

            <p className="text-sm sm:text-base opacity-80 max-w-prose">
              With hands-on experience in property management, high-rise maintenance, electrical systems, plumbing
              repairs, carpentry, appliance installation, and full unit turnovers, we bring both technical skill and
              professionalism to every project.
            </p>

            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-soft">
              <p className="text-sm font-semibold text-brand-navy mb-3">
                Whether it's a half-day repair or a full-week project, our focus remains the same:
              </p>

              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                  Clear communication
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                  Honest pricing
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                  Clean, efficient execution
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                  Long-lasting results
                </li>
              </ul>

              <p className="mt-4 text-sm opacity-80">
                At Pro Brothers Handyman, we don’t just fix issues — we provide dependable solutions homeowners and
                property managers can trust.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-5 py-3 rounded-2xl bg-brand-navy text-brand-cream font-semibold hover:opacity-90 shadow-soft"
              >
                Schedule an assessment
              </Link>
              <a
                href="mailto:probrothershandyman@gmail.com"
                className="px-5 py-3 rounded-2xl border border-brand-navy/30 text-brand-navy font-semibold hover:bg-white/60"
              >
                Email us
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur aspect-[4/3] shadow-soft flex items-center justify-center text-sm text-brand-muted">
            <div className="rounded-3xl border border-black/10 shadow-soft overflow-hidden aspect-[4/3]">
            <img
              src="/about-us.jpeg"
              alt="Home Page Hero"
              className="w-full h-full object-cover"
            />
            </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard label="Service Area" value="Concord • Walnut Creek • Surrounding areas" />
              <InfoCard label="Email" value="probrothershandyman@gmail.com" />
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-brand-navy">What we’re great at</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Electrical",
                  "Plumbing",
                  "Carpentry",
                  "Appliance installs",
                  "Turnovers",
                  "High-rise maintenance",
                ].map((x) => (
                  <span
                    key={x}
                    className="px-3 py-1 rounded-full text-xs border border-black/10 bg-brand-gold/10 text-brand-navy"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-soft">
      <div className="text-xs uppercase font-semibold opacity-60">{label}</div>
      <div className="mt-2 text-sm font-medium text-brand-navy">{value}</div>
    </div>
  );
}