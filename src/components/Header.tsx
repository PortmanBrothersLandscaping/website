"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { MenuIcon, CloseIcon, PhoneIcon } from "./icons";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={220}
            height={70}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-primary"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-cream px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1 text-base font-medium text-ink-soft">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 hover:bg-primary-light hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary"
            >
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
