import { useState } from "react";
import Button from "../components/Button";
export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "ok", msg: "Form submitted (demo). Next: connect Formspree/Getform or your backend." });
    e.target.reset();
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* LEFT: CONTACT INFO */}
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide opacity-70">Contact</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Request a quote</h1>
          <p className="text-sm opacity-80 max-w-prose">
            Share your property details and what you need done. We’ll follow up with questions and an estimate.
          </p>

          <div className="rounded-3xl border p-6 space-y-3">
            <div>
              <div className="text-xs uppercase opacity-60 font-semibold">Phone</div>
              <a className="font-medium hover:opacity-80" href="tel:5108386545">
                (510) 838-6545
              </a>
            </div>
            <div>
              <div className="text-xs uppercase opacity-60 font-semibold">Email</div>
              <a className="font-medium hover:opacity-80" href="mailto:probrothershandyman@gmail.com">
              probrothershandyman@gmail.com
              </a>
            </div>
            <div>
              <div className="text-xs uppercase opacity-60 font-semibold">Office</div>
              <div className="font-medium">Concord, CA</div>
            </div>
          </div>

          {/* <div className="rounded-3xl bg-neutral-50 border aspect-[4/3] flex items-center justify-center text-sm opacity-60"> */}
           <div className="rounded-3xl border border-black/10 shadow-soft overflow-hidden aspect-[4/3]">
            <img
              src="/contact-us.jpg"
              alt="Contact US Image"
              className="w-full h-full object-cover"
            />
            {/* </div> */}
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="rounded-3xl border border-black/10 p-6 sm:p-8 bg-white shadow-soft">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="firstName" />
              <Field label="Last name" name="lastName" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Property address" name="address" />
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                placeholder="Describe the issue, timeline, and any photos/notes you have."
              />
            </div>

            <Button type="submit" className="w-full">Submit</Button>

            {status.type !== "idle" && (
              <p className="text-sm mt-2">{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}