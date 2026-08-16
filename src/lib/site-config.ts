// Central place for all business info shown across the site.
// Edit these values to update contact info, hours, services, etc. everywhere at once.

export const siteConfig = {
  name: "Portman Brothers Lawn Care",
  shortName: "Portman Brothers",
  tagline: "Design, Build & Maintenance of Commercial and Residential Landscapes",
  phoneDisplay: "(314) 775-3909",
  phoneHref: "tel:+13147753909",
  email: "austin@portmanbrothers.com",
  contactName: "Austin Portman",
  serviceArea: "St. Louis & Jefferson County, MO",
  hours: "Monday – Friday, 7:00 AM – 5:00 PM",
  sinceYear: 2003,
  certification:
    "Commercial Applicator's License: Selective & Non-Selective Herbicides and Pesticides",
  logo: "/images/logo.jpg",
};

export type ServiceItem = {
  id: string;
  title: string;
  /** Condensed teaser shown on the closed card — written to "sell the click". */
  shortDescription: string;
  /** Bold intro line at the top of the expanded panel. */
  tagline: string;
  /** Full body copy, in order, exactly as written. */
  paragraphs: string[];
  /** Final line, rendered as the call-to-action linking to #contact. */
  cta: string;
  /** Photo shown on the card. Drop a real photo in at this same path to swap it. */
  image: string;
};

// Full service copy provided by Shawn Farson (farsonrei@gmail.com), 2026-08-16 —
// keep this wording as-given; it's meant to sell the vertically-integrated,
// full-service positioning (design + build + own sod farm + own sawmill +
// tree/crane work + ongoing maintenance), not just "we mow lawns."
export const services: ServiceItem[] = [
  {
    id: "design-build",
    title: "Landscape Design & Build",
    shortDescription:
      "From concept to completion: design, installation and ongoing care for residential and commercial landscapes.",
    tagline: "From the first idea to the finished landscape, we handle it all.",
    paragraphs: [
      "Whether you're refreshing an existing property or starting with a blank canvas, our team provides complete landscape design and installation services for residential and commercial properties. We can take your project from an initial conversation and professional design rendering all the way through construction, planting and final cleanup.",
      "Our landscape services include new plant and tree installation, landscape beds, grading, drainage solutions, irrigation, mulch, landscape lighting, retaining walls, hardscapes and complete property transformations.",
      "Our Full-Service Process: We start by walking the property with you to understand your goals, budget and how you want to use the space. For larger projects, we can develop a formal landscape design and rendering so you can visualize the finished product before construction begins. From there, our team coordinates materials, site preparation, installation and finishing work, giving you one experienced company to manage the project from beginning to end.",
      "With more than 20 years in business and many customers who have trusted us since 2003, we focus on building landscapes that look great on day one and continue performing for years to come.",
    ],
    cta: "Ready to transform your property? Request a free consultation and estimate.",
    image: "/images/service-landscape-design.jpg",
  },
  {
    id: "sod",
    title: "Sod Sales & Installation",
    shortDescription:
      "Farm-grown Tall Fescue, Bluegrass and Zoysia, professionally installed or available directly for DIY projects.",
    tagline: "Farm-grown sod, professionally installed or delivered for your DIY project.",
    paragraphs: [
      "A great lawn starts with quality sod and proper preparation. Because we own and operate our own sod farm, we have greater control over the product going into your yard and can help customers choose the right grass for their property.",
      "We offer Tall Fescue, Bluegrass and Zoysia for residential properties, commercial projects and direct-to-consumer purchases throughout our service area.",
      "For full-service installations, our team can handle the entire process: removal of existing turf, grading and soil preparation, sod delivery, installation, rolling and finishing, followed by detailed watering and establishment instructions.",
      "Prefer to install it yourself? We also sell sod directly to homeowners, contractors and other customers.",
      "Our Full-Service Process: We'll evaluate your property, recommend the appropriate sod, calculate the amount required and prepare the site before installation. Proper preparation is critical. We don't simply lay new sod over an existing problem and hope for the best.",
      "Owning our own sod farm also means you're working directly with the people who understand the product from the field where it's grown to the yard where it's installed.",
    ],
    cta: "Professional installation or DIY: we can help you start with better grass.",
    image: "/images/service-sod.jpg",
  },
  {
    id: "tree-care",
    title: "Tree Removal & Trimming",
    shortDescription:
      "Insured tree crews with bucket trucks, chippers and crane service, from routine trimming to hazardous removals.",
    tagline:
      "From routine trimming to complex removals, we have the equipment and experience to handle the entire job.",
    paragraphs: [
      "Tree work requires the right combination of experience, equipment and safety. Our insured tree-service team handles everything from routine pruning and maintenance to large, hazardous and difficult-access tree removals.",
      "Services include tree trimming and pruning, complete tree removal, stump grinding, dead or hazardous tree removal, storm cleanup, lot clearing and preventative maintenance.",
      "For larger and more complicated projects, we have access to the equipment necessary to get the job done safely and efficiently, including bucket trucks, lifts, chippers, stump grinders and crane service.",
      "And because we operate our own sawmill, removing a tree doesn't necessarily mean sending usable wood to waste. Depending on the tree and condition, we can discuss options for milling usable logs into lumber, slabs or other material.",
      "Our Full-Service Process: We assess the tree, surrounding structures and access conditions before determining the safest and most efficient approach. Our team then handles removal or trimming, debris cleanup and stump grinding when requested, leaving the property clean when the work is complete.",
    ],
    cta: "Have a tree you're concerned about? Let our team take a look.",
    image: "/images/service-tree-removal.jpg",
  },
  {
    id: "lumber",
    title: "Lumber Mill & Sales",
    shortDescription:
      "Our own local sawmill offering hardwood lumber, live-edge slabs, kiln services and custom milling throughout Missouri.",
    tagline: "Local trees. Local mill. Quality hardwood with a story behind it.",
    paragraphs: [
      "Our sawmill gives us the ability to turn locally sourced trees into usable lumber instead of allowing valuable hardwood to go to waste. We primarily work with oak, but can mill virtually any domestic hardwood.",
      "We sell live-edge slabs, dimensional lumber, custom-cut lumber, firewood and other locally milled wood products to homeowners, woodworkers, builders, craftsmen and commercial customers throughout Missouri.",
      "We also provide kiln-drying services for customers who need properly dried lumber for woodworking, furniture and other projects.",
      "Have your own tree or logs? Bring them to us. Our custom milling service allows customers to turn their own trees into lumber they can actually use, whether that's a stack of boards for a future project or slabs from a tree with sentimental value.",
      "Custom milling starts at $1.50 per board foot.",
      "Because lumber movement is subject to applicable state restrictions, our lumber sales are limited to Missouri.",
      "Whether you need a single unique slab, a quantity of hardwood or want to preserve a tree from your own property, talk with us about what we can mill.",
    ],
    cta: "Looking for lumber or have a tree you'd like milled? Contact the mill to discuss your project.",
    image: "/images/service-lumber-mill.jpg",
  },
  {
    id: "hardscapes",
    title: "Residential & Commercial Hardscapes",
    shortDescription:
      "Patios, retaining walls, outdoor kitchens and more, designed and built to handle your property's grade, drainage and daily use.",
    tagline: "Build outdoor spaces that are meant to be used and built to last.",
    paragraphs: [
      "A great outdoor space is about more than plants and grass. Our hardscape team designs and installs functional outdoor features for homes, businesses and commercial properties.",
      "Our capabilities include patios, retaining walls, walkways, pavers, concrete, natural stone, fire pits, outdoor kitchens, drainage solutions and complete outdoor living spaces.",
      "Rather than limiting customers to one manufacturer or product line, we work with a wide range of proven materials and systems. That allows us to recommend options based on the look, performance requirements and budget of your particular project.",
      "Our Full-Service Process: We begin with your vision and evaluate the property for drainage, grade, access and existing conditions. From there, we can help with layout, design, material selection, site preparation and construction.",
      "And when a project includes landscaping, sod, trees or ongoing maintenance, you don't need to coordinate multiple contractors. Our team can manage those pieces as part of one complete project.",
    ],
    cta: "One project. One team. From the ground underneath it to the finishing touches around it.",
    image: "/images/service-hardscapes.jpg",
  },
  {
    id: "maintenance",
    title: "Lawn Mowing & Routine Maintenance",
    shortDescription:
      "Reliable, scheduled mowing built around your property, plus fertilization, cleanups and other seasonal add-ons whenever you want them.",
    tagline: "Reliable lawn care without making it complicated.",
    paragraphs: [
      "Our core maintenance service covers the essentials needed to keep your property looking clean and professionally maintained:",
      "Cut. Trim. Edge. Blow.",
      "From there, you decide how much additional help you want.",
      "Customers can build on their routine service with fertilization, weed control, aeration, overseeding, leaf removal, spring and fall cleanups, mulch, landscape maintenance, shrub and tree care and other seasonal services.",
      "We provide recurring lawn and property maintenance for both residential and commercial customers, with service plans built around the needs of each property rather than forcing every customer into the same package.",
      "And when something bigger comes up, you already have a team that knows your property. Instead of finding another contractor for a damaged tree, new sod, drainage issue, retaining wall or landscape renovation, our full-service team can handle it.",
      "Some of our customers have trusted us with their properties since we opened our doors in 2003. We believe the best lawn-care relationship is one you don't have to rethink every season.",
    ],
    cta: "Tell us what you want handled, and we'll help build the right maintenance plan for your property.",
    image: "/images/service-lawn-mowing.jpg",
  },
];

// Seasonal/winter copy, based on content provided 2026-08-16 — rewritten as
// flowing paragraphs (rather than the original bullet-list form) to match
// the tone and structure of the `services` copy above.
export const seasonalServices: ServiceItem[] = [
  {
    id: "snow-removal",
    title: "Snow Removal & Ice Management",
    shortDescription:
      "Reliable snow and ice management tailored to your property, from routine plowing to storm response.",
    tagline: "When winter weather hits, you need more than a plow. You need a team you can count on.",
    paragraphs: [
      "We provide snow and ice management tailored to the needs of each property, including driveway and parking lot plowing, sidewalk and walkway clearing, snow blowing and hand shoveling, and salting and ice management.",
      "We offer both residential and commercial service, with recurring and seasonal service options as well as storm response and post-storm cleanup when you need it.",
      "For commercial properties, we can develop a winter service plan around parking areas, entrances, sidewalks and other high-traffic areas to help keep properties accessible throughout winter weather.",
    ],
    cta: "Contact us for a snow and ice management estimate.",
    image: "/images/service-snow-removal.jpg",
  },
  {
    id: "christmas-lights",
    title: "Custom Holiday Light Installation",
    shortDescription:
      "Custom-designed holiday lighting installed and removed for you, from classic rooflines to full custom displays.",
    tagline:
      "Enjoy the holidays without spending your weekend on a ladder. Our team provides custom holiday lighting designed specifically for your home or business.",
    paragraphs: [
      "We can handle the process from beginning to end, including custom lighting layouts, roofline and architectural lighting, and lighting for trees, shrubs and landscape features.",
      "We install both residential holiday displays and commercial and storefront displays, with professional installation, seasonal maintenance and adjustments, and full post-season removal.",
      "Whether you want a clean, classic roofline or a larger custom display, we'll work with you to create a look that complements your property.",
    ],
    cta: "Contact us for a custom holiday lighting estimate.",
    image: "/images/service-christmas-lights.jpg",
  },
];

export const testimonials = [
  {
    quote: "Replace this with a real customer testimonial before launch.",
    name: "Customer Name",
  },
  {
    quote: "Replace this with a real customer testimonial before launch.",
    name: "Customer Name",
  },
  {
    quote: "Replace this with a real customer testimonial before launch.",
    name: "Customer Name",
  },
];
