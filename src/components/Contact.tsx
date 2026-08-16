"use client";

import { useState, type FormEvent } from "react";
import { services, siteConfig } from "@/lib/site-config";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = { "form-name": "quote-request" };
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-primary px-4 py-20 text-white sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Get in Touch
          </h2>
          <p className="mt-2 text-3xl font-bold sm:text-4xl">Request a Free Quote</p>
          <p className="mt-4 text-white/80">
            Tell us a bit about your project and we&apos;ll get back to you with a free
            quote.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-white">
              <PhoneIcon className="h-5 w-5 shrink-0" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 hover:text-white"
            >
              <MailIcon className="h-5 w-5 shrink-0" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3">
              <PinIcon className="h-5 w-5 shrink-0" />
              Serving {siteConfig.serviceArea}
            </div>
            <div className="flex items-center gap-3">
              <ClockIcon className="h-5 w-5 shrink-0" />
              {siteConfig.hours}
            </div>
          </div>
        </div>

        <form
          name="quote-request"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 text-ink shadow-lg sm:p-8 lg:col-span-3"
          {...{ "netlify-honeypot": "bot-field" }}
        >
          {/* required for Netlify's static form detection */}
          <input type="hidden" name="form-name" value="quote-request" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="text-sm font-medium text-ink">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className="text-sm font-medium text-ink">
                Service Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="text-sm font-medium text-ink">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send Request"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-primary">
              Thanks! Your request has been sent. We&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-accent">
              Something went wrong. Please call or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
