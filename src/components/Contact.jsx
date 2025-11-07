import { useState } from "react";
import axios from "axios";
import { isEmail, isPhone, isNonEmpty } from "../utils/validate";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!isNonEmpty(form.name) || !isNonEmpty(form.email) || !isNonEmpty(form.phone) || !isNonEmpty(form.message)) {
      setStatus("All fields are required");
      return;
    }
    if (!isEmail(form.email)) {
      setStatus("Please enter a valid email");
      return;
    }
    if (!isPhone(form.phone)) {
      setStatus("Please enter a valid phone");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", form, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 200 || res.status === 201) {
        setStatus("Form Submitted");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong");
      }
    } catch (err) {
      setStatus("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white/70">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Join the story</h2>
        <p className="text-center text-gray-600 mt-2">Ready to bring your vision to life</p>

        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="rounded-lg border border-gray-300 bg-white p-3 outline-none focus:ring-2 focus:ring-rose-300"
              name="name" placeholder="Your Name" value={form.name} onChange={handle}
            />
            <input
              className="rounded-lg border border-gray-300 bg-white p-3 outline-none focus:ring-2 focus:ring-rose-300"
              name="email" type="email" placeholder="Email" value={form.email} onChange={handle}
            />
          </div>
          <input
            className="rounded-lg border border-gray-300 bg-white p-3 outline-none focus:ring-2 focus:ring-rose-300"
            name="phone" placeholder="Phone" value={form.phone} onChange={handle}
          />
          <textarea
            className="rounded-lg border border-gray-300 bg-white p-3 h-32 outline-none focus:ring-2 focus:ring-rose-300"
            name="message" placeholder="Message" value={form.message} onChange={handle}
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center rounded-full bg-[var(--brand-red)] text-white px-6 py-2 hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {status && (
              <span className={`text-sm ${status === "Form Submitted" ? "text-green-600" : "text-rose-600"}`}>
                {status}
              </span>
            )}
          </div>
        </form>

        <div className="mt-8 text-center text-sm">
          <p>vernita@varnanfilms.co.in &nbsp; | &nbsp; +91 98736 84567</p>
        </div>
      </div>
    </section>
  );
}
