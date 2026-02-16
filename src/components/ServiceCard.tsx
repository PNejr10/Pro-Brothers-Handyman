import type { Service } from "../data/services";

type Props = Service;

export default function ServiceCard({ title, desc, icn: Icon }: Props) {
  return (
    <div className="group rounded-3xl border border-black/10 bg-white p-6 shadow-soft hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,31,58,0.15)] transition duration-300">
      
      <div className="h-12 w-12 rounded-2xl bg-brand-gold/15 flex items-center justify-center border border-black/5 mb-4 transition group-hover:bg-brand-gold/25">
        <Icon className="h-6 w-6 text-brand-navy transition group-hover:text-brand-gold" />
      </div>

      <h3 className="font-semibold text-lg text-brand-navy">
        {title}
      </h3>

      <p className="mt-2 text-sm text-brand-muted">
        {desc}
      </p>
    </div>
  );
}