"use client";

import { useState } from "react";
import Image from "next/image";
import type { ServiceItem } from "@/lib/site-config";
import { ArrowRightIcon, ChevronDownIcon, CloseIcon } from "./icons";

// Renders "Our Full-Service Process:" (or any bold label ending in a colon
// at the start of a paragraph) as bold, matching how the source copy reads.
function Paragraph({ text }: { text: string }) {
  const match = text.match(/^([A-Z][^:]{0,40}:)\s*(.*)$/s);
  if (match) {
    const [, label, rest] = match;
    return (
      <p>
        <span className="font-semibold text-ink">{label} </span>
        {rest}
      </p>
    );
  }
  return <p>{text}</p>;
}

export default function ServiceCards({
  items,
  maxColumns = 3,
}: {
  items: ServiceItem[];
  /** Caps the grid so a short list (e.g. 2 seasonal services) doesn't leave a gap. */
  maxColumns?: 2 | 3;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const gridClass = maxColumns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {items.map((item) => {
        const isOpen = item.id === openId;

        // Expanded card breaks out to full width so the detail shows up
        // immediately where the card was clicked, instead of scrolling the
        // reader somewhere else on the page to find it.
        const spanClass = isOpen
          ? maxColumns === 2
            ? "sm:col-span-2"
            : "sm:col-span-2 lg:col-span-3"
          : "";

        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md ${spanClass}`}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full flex-col text-left"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <ChevronDownIcon
                    className={`mt-1 h-5 w-5 shrink-0 text-ink-soft/60 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.shortDescription}
                </p>
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-black/5 px-6 pb-6 pt-5 sm:px-8 sm:pb-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-lg font-bold text-ink sm:text-xl">{item.tagline}</p>
                  <button
                    type="button"
                    onClick={() => setOpenId(null)}
                    aria-label="Close"
                    className="shrink-0 rounded-full p-1.5 text-ink-soft hover:bg-primary-light hover:text-primary"
                  >
                    <CloseIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-soft">
                  {item.paragraphs.map((paragraph, i) => (
                    <Paragraph key={i} text={paragraph} />
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setOpenId(null)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark"
                >
                  Request a Free Quote
                  <ArrowRightIcon className="h-4 w-4 shrink-0" />
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
