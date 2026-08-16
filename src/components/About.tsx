import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { BadgeIcon } from "./icons";

export default function About() {
  const years = new Date().getFullYear() - siteConfig.sinceYear;

  return (
    <section id="about" className="bg-primary-light px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src="/images/team.jpg" alt="The Portman Brothers team" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">About Us</h2>
          <p className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
            Servicing St. Louis Since {siteConfig.sinceYear}
          </p>
          <p className="mt-5 text-ink-soft">
            For over {years} years, Portman Brothers Lawn Care has been designing,
            building, and maintaining landscapes for homeowners and businesses across St.
            Louis and Jefferson County. From routine lawn care to full hardscape builds,
            we treat every property like it's our own.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <BadgeIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-ink">Licensed & Certified</p>
              <p className="mt-1 text-sm text-ink-soft">{siteConfig.certification}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
