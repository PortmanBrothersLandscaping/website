import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Portman Brothers Lawn Care project"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/30" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="mb-3 text-sm font-semibold tracking-wide text-white/80 uppercase">
          Serving {siteConfig.serviceArea} since {siteConfig.sinceYear}
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          {siteConfig.name}
        </h1>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-accent px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
          >
            Get a Free Quote
          </a>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-white/95 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            <PhoneIcon className="h-5 w-5 text-primary" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
