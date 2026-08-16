import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MailIcon, PinIcon } from "./icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark px-4 py-12 text-white/80 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={200}
            height={64}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PinIcon className="h-4 w-4 shrink-0" />
              Serving {siteConfig.serviceArea}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/60">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
