import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function SponsorForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thank you! Our team will reach out shortly.");
    e.currentTarget.reset();
  }

  return (
    <section id="sponsor" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold">Sponsor Us</h3>
            <p className="mt-2 text-slate-600">
              We’d love to design a partnership tailored to your objectives.
              Share a few details and we’ll get back within 24–48 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border px-3 py-2 outline-none focus:border-indigo-500"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Company</label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:border-indigo-500"
                    placeholder="Organization name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:border-indigo-500"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:border-indigo-500"
                    placeholder="Contact number"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Budget Range</label>
                  <select className="w-full rounded-lg border px-3 py-2 outline-none focus:border-indigo-500">
                    <option>Under ₹1L</option>
                    <option>₹1L–₹5L</option>
                    <option>₹5L–₹10L</option>
                    <option>₹10L+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border px-3 py-2 outline-none focus:border-indigo-500"
                  placeholder="What would you like to achieve with this partnership?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white shadow hover:bg-indigo-700"
              >
                <Send size={18} /> Submit
              </button>
              {status && (
                <div className="text-sm text-emerald-600">{status}</div>
              )}
            </form>
          </div>

          <div className="rounded-2xl border p-6">
            <h4 className="text-lg font-semibold">Contacts</h4>
            <div className="mt-4 space-y-4 text-slate-700">
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-600" />
                <a href="mailto:sponsorship@kshitij.org" className="hover:underline">
                  sponsorship@kshitij.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-indigo-600" />
                <a href="tel:+919999999999" className="hover:underline">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-600" />
                <span>IIT Kharagpur, WB, India</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold">Office Hours</h4>
              <p className="mt-1 text-slate-600">Mon–Fri • 10:00–18:00 IST</p>
              <div className="mt-4 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-800">
                Our team typically responds within one working day.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
