import Image from "next/image";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Landscape design and build project" },
  { src: "/images/gallery-2.jpg", alt: "Sod installation project" },
  { src: "/images/gallery-3.jpg", alt: "Tree trimming and removal work" },
  { src: "/images/gallery-4.jpg", alt: "Hardscape project" },
  { src: "/images/gallery-5.jpg", alt: "Lawn maintenance work" },
  { src: "/images/gallery-6.jpg", alt: "Completed landscaping project" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Our Work
          </h2>
          <p className="mt-2 text-3xl font-bold text-ink sm:text-4xl">Recent Projects</p>
          <p className="mt-4 text-ink-soft">
            A look at some of our landscape, hardscape, and lawn care projects around St.
            Louis and Jefferson County.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-light"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
