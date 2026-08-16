import { seasonalServices, services } from "@/lib/site-config";
import ServiceCards from "./ServiceCards";

export default function Services() {
  return (
    <section id="services" className="bg-cream px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-ink-soft">
            We&apos;re not just a mowing company. We&apos;re a vertically integrated,
            full-service outdoor company with our own sod farm, our own sawmill, and the
            ability to take a project from design through installation and ongoing
            maintenance.
          </p>
        </div>

        <div className="mt-12">
          <ServiceCards items={services} />
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Seasonal & Winter Services
          </p>
          <p className="mt-3 text-ink-soft">
            Our work doesn&apos;t stop when the growing season ends. We provide dependable
            seasonal and winter services for both residential and commercial properties,
            including snow removal, ice management and custom holiday light installation.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <ServiceCards items={seasonalServices} maxColumns={2} />
        </div>
      </div>
    </section>
  );
}
