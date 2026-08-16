import { testimonials } from "@/lib/site-config";
import { StarIcon } from "./icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Reviews
          </h2>
          <p className="mt-2 text-3xl font-bold text-ink sm:text-4xl">What Customers Say</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, star) => (
                  <StarIcon key={star} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-sm italic leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-ink">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
