// Small hand-rolled line icons so the site doesn't need an extra icon-library
// dependency. Swap any of these for real icons or photos later if you like.

type IconProps = { className?: string };

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M5 19c2-4 5-7 9-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function TreeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3 6 12h3l-4 6h5v3h4v-3h5l-4-6h3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HammerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 6.5 18 3l3 3-3.5 3.5M14.5 6.5 4 17v3h3L17.5 9.5M14.5 6.5l3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14 11h4l3 3v2h-7v-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="6.5" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function WallIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="7" height="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="4" width="7" height="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17" y="4" width="4" height="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6.5" y="9" width="7" height="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="9" width="7" height="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="9" width="3.5" height="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="14" width="7" height="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="14" width="7" height="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17" y="14" width="4" height="5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MowerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 18h6l2-9h4M12 18h4l2-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 9V5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m12 2 2.2 2.1 3-.5.6 3 2.7 1.4-.9 2.9.9 2.9-2.7 1.4-.6 3-3-.5L12 20l-2.2-2.1-3 .5-.6-3-2.7-1.4.9-2.9-.9-2.9L6.2 6.6l.6-3 3 .5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="m9 12.5 2 2 4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 2.5 2.9 6.1 6.6.7-4.9 4.5 1.3 6.6L12 17l-5.9 3.4 1.3-6.6-4.9-4.5 6.6-.7L12 2.5Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SnowflakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4.2 6.5 19.8 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19.8 6.5 4.2 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M9 4.5 12 7l3-2.5M9 19.5 12 17l3 2.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8l1 3-3 1M19 8l-1 3 3 1M5 16l1-3-3-1M19 16l-1-3 3-1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LightsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 6c2.5 3 5 3 7 0s4.5-3 7 0 4.5 3 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="4.5" cy="9.5" r="1.4" fill="currentColor" />
      <circle cx="9.5" cy="10.5" r="1.4" fill="currentColor" />
      <circle cx="14.5" cy="10.5" r="1.4" fill="currentColor" />
      <circle cx="19.5" cy="9.5" r="1.4" fill="currentColor" />
    </svg>
  );
}
