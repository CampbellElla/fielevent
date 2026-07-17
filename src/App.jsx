import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const aboutFeatures = [
  {
    icon: "fa-gem",
    title: "Refined Aesthetics",
    text: "Elegant design for every occasion",
  },
  {
    icon: "fa-heart",
    title: "Thoughtful Creation",
    text: "Events crafted with genuine care",
  },
  {
    icon: "fa-award",
    title: "Dependable Execution",
    text: "Professional from start to finish",
  },
  {
    icon: "fa-handshake",
    title: "Trusted Partners",
    text: "Curated network of vendors",
  },
];

const vmCards = [
  {
    icon: "fa-eye",
    title: "Our Vision",
    text: "To be a trusted, go-to event company known for creativity, careful execution, and a customer-focused approach. We aspire to set the standard for luxury event planning, where every client feels valued and every celebration becomes a cherished memory.",
  },
  {
    icon: "fa-bullseye",
    title: "Our Mission",
    text: "To deliver exceptional, tailor-made events that exceeds client expectations and create lasting impressions. Through thoughtful creation, refined aesthetics, and dependable execution, we bring each client's unique vision to life with care and professionalism.",
  },
];

const services = [
  {
    icon: "fa-ring",
    title: "Wedding Planning",
    text: "Full-service wedding planning from engagement to the big day, crafting your perfect love story.",
  },
  {
    icon: "fa-birthday-cake",
    title: "Birthday Parties",
    text: "Celebrate milestones with sophisticated birthday celebrations designed to delight.",
  },
  {
    icon: "fa-briefcase",
    title: "Corporate Events",
    text: "Professional corporate events that elevate your brand and engage your audience.",
  },
  {
    icon: "fa-rocket",
    title: "Product Launches",
    text: "Launch your products with impact through memorable, brand-aligned events.",
  },
  {
    icon: "fa-baby",
    title: "Baby Showers",
    text: "Charming baby showers that celebrate new beginnings with elegance and joy.",
  },
  {
    icon: "fa-female",
    title: "Bridal Showers",
    text: "Intimate bridal showers that honor the bride-to-be with style and grace.",
  },
  {
    icon: "fa-glass-cheers",
    title: "Anniversary Celebrations",
    text: "Honor your journey together with a beautiful anniversary celebration.",
  },
  {
    icon: "fa-palette",
    title: "Event Decoration",
    text: "Stunning decor and floral design that transforms any space into a masterpiece.",
  },
  {
    icon: "fa-tasks",
    title: "Event Coordination",
    text: "Comprehensive coordination ensuring every detail runs flawlessly on event day.",
  },
  {
    icon: "fa-handshake",
    title: "Vendor Management",
    text: "Curated vendor partnerships delivering the highest quality for your event.",
  },
  {
    icon: "fa-calculator",
    title: "Budget Planning",
    text: "Strategic budget management maximizing value without compromising quality.",
  },
  {
    icon: "fa-truck",
    title: "Event Logistics",
    text: "End-to-end logistics management ensuring smooth execution from start to finish.",
  },
  {
    icon: "fa-clipboard-check",
    title: "Day-of Coordination",
    text: "Expert day-of coordination so you can relax and enjoy your celebration.",
  },
  {
    icon: "fa-plane",
    title: "Destination Events",
    text: "Breathtaking destination events in the world's most beautiful locations.",
  },
];

const whyCards = [
  {
    icon: "fa-user-edit",
    title: "Personalized Planning",
    text: "Every event is uniquely tailored to reflect your personality, style, and vision.",
  },
  {
    icon: "fa-lightbulb",
    title: "Creative Concepts",
    text: "Innovative event designs that push boundaries and create wow moments.",
  },
  {
    icon: "fa-users-cog",
    title: "Experienced Team",
    text: "A team of dedicated event professionals commited to excellence",
  },
  {
    icon: "fa-star",
    title: "Reliable Vendors",
    text: "Curated network of trusted, top-tier vendors and suppliers.",
  },
  {
    icon: "fa-spa",
    title: "Stress-Free Coordination",
    text: "We handle every detail so you can relax and enjoy your celebration.",
  },
  {
    icon: "fa-search",
    title: "Attention to Detail",
    text: "Meticulous focus on every element, no matter how small.",
  },
  {
    icon: "fa-clock",
    title: "Timely Delivery",
    text: "Consistent on-time execution with flawless project management.",
  },
  {
    icon: "fa-gem",
    title: "Luxury Experience",
    text: "Premium service that exceeds expectations at every touchpoint.",
  },
];

const portfolioItems = [
  {
    category: "weddings",
    title: "Tuscany Garden Wedding",
    location: "Tuscany, Italy",
    desc: "A romantic outdoor ceremony with ivory roses and eucalyptus under golden sunset skies.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1374d7ef0-9573-49b1-81fc-17f2635a7b46.png",
  },
  {
    category: "corporate",
    title: "Annual Gala Night",
    location: "New York, USA",
    desc: "A sophisticated corporate gala celebrating company achievements with black and gold elegance.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1b341c313-a68b-4a94-893a-ac5a799db224.png",
  },
  {
    category: "birthdays",
    title: "Golden Milestone Birthday",
    location: "Paris, France",
    desc: "A luxurious 50th birthday celebration with champagne tower and gold accents.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1a6647fc2-bf91-4875-84bc-b37d20852970.png",
  },
  {
    category: "luxury",
    title: "Private Dinner Soirée",
    location: "London, UK",
    desc: "An intimate luxury dinner with candlelight and bespoke floral arrangements.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/149a5458e-1499-4633-8393-c260b4463f17.png",
  },
  {
    category: "social",
    title: "Elegant Bridal Shower",
    location: "Milan, Italy",
    desc: "A charming bridal shower with ivory florals and vintage gold accents.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1fef6c745-9049-4127-93ef-7d4aeacc5406.png",
  },
  {
    category: "corporate",
    title: "Tech Innovation Summit",
    location: "Dubai, UAE",
    desc: "A cutting-edge conference with modern stage design and premium branding.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/187eb1cd3-2939-47d6-832d-70dd6eec4c7c.png",
  },
  {
    category: "luxury",
    title: "Golden Anniversary Gala",
    location: "Monaco",
    desc: "A spectacular luxury anniversary event with gold balloons and floral elegance.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/15825c53c-73e9-4912-b334-7cdea5c5da42.png",
  },
  {
    category: "weddings",
    title: "Emerald Wedding Reception",
    location: "Santorini, Greece",
    desc: "A breathtaking wedding reception with emerald velvet and gold accents.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1f3296692-5605-4947-bc75-73a29d900800.png",
  },
  {
    category: "corporate",
    title: "Product Launch Event",
    location: "Los Angeles, USA",
    desc: "A modern product launch with olive and gold branded stage design.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/171d3dcf5-d5dc-4462-977d-d2f8c6988eb2.png",
  },
  {
    category: "weddings",
    title: "Ivory & Olive Wedding",
    location: "Provence, France",
    desc: "A romantic wedding with ivory roses, olive branches, and eucalyptus.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1295c583f-3494-45ee-99a3-a2c006fa63f9.png",
  },
  {
    category: "social",
    title: "Grand Ballroom Soirée",
    location: "Vienna, Austria",
    desc: "An elegant ballroom event with crystal chandeliers and floral installations.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1534b5fa7-dd33-422c-a665-547b699d05fb.png",
  },
  {
    category: "weddings",
    title: "Floral Wedding Cake",
    location: "Napa Valley, USA",
    desc: "A three-tier wedding cake adorned with fresh peonies and gold leaf.",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1e51849be-828e-4f09-b541-832983139a64.png",
  },
];

const testimonials = [
  {
    text: '"FIEL Events transformed our wedding into a fairytale. Every detail was perfect, from the floral arrangements to the timing. The team exceeded every expectation we had. Truly magical!"',
    author: "Sophia Anderson",
    role: "Wedding • Tuscany",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/197d15489-7e57-4d6e-a153-e1e33c5c7118.png",
  },
  {
    text: '"Our corporate gala was a huge success thanks to FIEL. The professionalism, creativity, and flawless execution were outstanding. Our clients were impressed and our team was stress-free."',
    author: "Michael Chen",
    role: "Corporate Gala • NYC",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1a5a4dea8-a480-401a-8d6c-b5cf11cc1226.png",
  },
  {
    text: '"My 60th birthday celebration was beyond anything I could have imagined. The attention to detail, the elegant decor, the seamless coordination — FIEL made it absolutely perfect."',
    author: "Eleanor Whitmore",
    role: "Birthday • Paris",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1fa5aac90-c82e-4ffc-a235-9db8ebdcbf13.png",
  },
  {
    text: '"From the first consultation to the final celebration, FIEL Events delivered an exceptional experience. Their creativity and professionalism are unmatched. Highly recommend!"',
    author: "Olivia Martinez",
    role: "Anniversary • Santorini",
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/134d44c3f-8f81-412e-9818-58f37b835b5f.png",
  },
];

const timelineSteps = [
  {
    title: "Book Consultation",
    text: "Schedule your complimentary initial consultation to discuss your vision and goals.",
  },
  {
    title: "Discovery Call",
    text: "We dive deep into your preferences, style, and expectations to understand your dream event.",
  },
  {
    title: "Planning & Budgeting",
    text: "We create a comprehensive plan and transparent budget tailored to your needs.",
  },
  {
    title: "Design & Coordination",
    text: "Our team brings your vision to life with stunning designs and meticulous coordination.",
  },
  {
    title: "Event Execution",
    text: "Flawless execution on the day with our experienced team managing every detail.",
  },
  {
    title: "Celebrate Stress-Free",
    text: "Relax and enjoy your celebration while we handle everything behind the scenes.",
  },
];

const pricingPlans = [
  {
    title: "Essential",
    sub: "Ideal for clients who have planned most aspect of their event but require professional oversight to ensure everything comes together smoothly",
    features: [
      "Initial consultation",
      "Event Planning review",
      "Vendor Liaison",
      "Event timeline(Run Sheet)",
      "Final planning meeting",
      "Event-day coordination",
      "Team supervision",
      "Vendor management on event day",
    ],
    buttonClass: "btn-outline btn-block",
    bestFor: "Clients who need expert coordination rather than full planning.",
  },
  {
    title: "Signature",
    featured: true,
    description:
      "Ideal for client who want a professional partner through out the planning process.",
    features: [
      "Budget planning",
      "Vendor sourcing",
      "Venue sourcing",
      "Planning meetings",
      "Guest experience planning.",
      "Logistics management",
      "Timeline development",
      "Full planning support",
    ],
    buttonClass: "btn-gold btn-block",
    bestFor:
      "Couples, families and organisations looking for end to end planning.",
  },
  {
    title: "Luxury",
    sub: "Our highest level of service for clients seeking a bespoke planning experience and dedicated support throughout their event journey.",
    features: [
      "Priority planning support",
      "Unlimited consultations",
      "Design oversight",
      "Vendor contract management",
      "Multiple venue visits",
      "Guest management support",
      "Rehearsal coordination (where applicable)",
      "Comprehensive event management",
    ],
    buttonClass: "btn-outline btn-block",
    bestFor:
      "Luxury weddings, corporate galas, large-scale celebrations, and high-profile events.",
  },
];

const faqItems = [
  {
    question: "What services does FIEL Events offer?",
    answer:
      "We provide comprehensive event planning and management services, including full event planning, event coordination, consultations, vendor sourcing, venue sourcing, logistics management, timeline development and on-site event execution for weddings, corporate events, social celebrations, and private functions.",
  },
  {
    question: "What types of events do you plan?",
    answer:
      "We plan and coordinate a wide range of events, including: Weddings Engagements Birthday celebrations Corporate events Conferences and seminars Gala dinners Product launches Private celebrations Religious events Social gatherings",
  },
  {
    question: "Do you only work in Lagos?",
    answer:
      "While we are based in Lagos, we are available to plan and coordinate events across Nigeria and can travel for destination events upon request.",
  },
  {
    question: "How early should I book FIEL Events?",
    answer:
      "We recommend booking as early as possible—ideally 6 to 12 months before your event for full planning services. Coordination services may be available closer to the event date, depending on our availability.",
  },
  {
    question: "Can you work with my budget?",
    answer:
      "Yes. We believe every successful event starts with realistic planning. During our consultation, we'll discuss your budget and recommend solutions that maximize value while maintaining quality.",
  },
  {
    question: "Do you work with vendors I have already selected?",
    answer:
      "Absolutely. We're happy to collaborate with your preferred vendors or recommend trusted professionals from our network if needed.",
  },
  {
    question: "Do you provide event coordination only?",
    answer:
      "Yes. If you've already planned your event but need a professional team to manage logistics and oversee the event day, our coordination service is an excellent option.",
  },
  {
    question: "What happens during the consultation?",
    answer:
      "Our consultation is an opportunity to understand your vision, event goals, preferences, budget, guest count, timeline, and expectations. We'll also discuss the services best suited to your needs and outline the next steps.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our website, email, or social media platforms. We'll schedule an initial consultation to discuss your event and how we can assist.",
  },
  {
    question: "Do you offer customized event planning packages?",
    answer:
      "Yes. Every event is unique, so we tailor our services to meet your specific requirements rather than offering one-size-fits-all solutions.",
  },
  {
    question: "Will someone be present on the event day?",
    answer:
      "Yes. Depending on the service you've booked, our team will be on-site to oversee logistics, coordinate vendors, manage the timeline, and ensure the event runs according to plan.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the scope, size, location, and complexity of your event. Following our consultation, we'll provide a customized proposal and quotation based on your specific needs.",
  },
  {
    question: "What makes FIEL Events different?",
    answer:
      "At FIEL Events, we combine thoughtful planning, professional coordination, and attention to detail to create events that reflect each client's vision. We prioritize clear communication, dependable service, and strong vendor partnerships to deliver memorable experiences from start to finish.",
  },
  {
    question: "Can you help if my event is only a few weeks away?",
    answer:
      "Yes. Depending on our availability and the scope of your event, we may be able to assist with last-minute planning or event coordination. Contact us as soon as possible to discuss your requirements.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can request a quotation by completing our inquiry form on the website or contacting us directly with details such as your event type, date, location, estimated guest count, and the services you require.",
  },
];

const blogPosts = [
  {
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/161849c96-cd21-4871-964a-4cca75120b51.png",
    date: "June 28, 2026",
    tag: "Weddings",
    title: "Top Wedding Trends for 2026",
    text: "Discover the latest wedding trends that are shaping celebrations this year, from sustainable decor to intimate gatherings.",
  },
  {
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/17f728a3a-f300-415f-b732-9ebd4fa5e204.png",
    date: "June 20, 2026",
    tag: "Planning",
    title: "Choosing the Perfect Venue",
    text: "A comprehensive guide to selecting the ideal venue for your event, considering location, capacity, and ambiance.",
  },
  {
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/149a5458e-1499-4633-8393-c260b4463f17.png",
    date: "June 15, 2026",
    tag: "Budget",
    title: "Budget Planning Guide",
    text: "Learn how to create and manage an event budget that maximizes value without compromising on quality or vision.",
  },
  {
    image:
      "https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/1bfb96286-fd5a-49dc-a6db-0991096dfd7d.png",
    date: "June 10, 2026",
    tag: "Corporate",
    title: "Corporate Event Ideas",
    text: "Innovative ideas for corporate events that engage employees, impress clients, and elevate your brand presence.",
  },
];

const searchableContent = [
  { title: "Wedding Planning", section: "Services", url: "#services" },
  { title: "Birthday Parties", section: "Services", url: "#services" },
  { title: "Corporate Events", section: "Services", url: "#services" },
  { title: "Conferences", section: "Services", url: "#services" },
  { title: "Product Launches", section: "Services", url: "#services" },
  { title: "Baby Showers", section: "Services", url: "#services" },
  { title: "Bridal Showers", section: "Services", url: "#services" },
  { title: "Anniversary Celebrations", section: "Services", url: "#services" },
  { title: "Luxury Private Events", section: "Services", url: "#services" },
  { title: "Event Decoration", section: "Services", url: "#services" },
  { title: "Venue Styling", section: "Services", url: "#services" },
  { title: "Event Coordination", section: "Services", url: "#services" },
  { title: "Vendor Management", section: "Services", url: "#services" },
  { title: "Budget Planning", section: "Services", url: "#services" },
  { title: "Event Logistics", section: "Services", url: "#services" },
  { title: "Day-of Coordination", section: "Services", url: "#services" },
  { title: "Destination Events", section: "Services", url: "#services" },
  { title: "Book Consultation", section: "Booking", url: "#booking" },
  { title: "Pricing Packages", section: "Pricing", url: "#pricing" },
  { title: "About FIEL Events", section: "About", url: "#about" },
  { title: "Portfolio", section: "Portfolio", url: "#portfolio" },
  { title: "Testimonials", section: "Testimonials", url: "#testimonials" },
  { title: "Contact Us", section: "Contact", url: "#contact" },
  { title: "FAQ", section: "FAQ", url: "#faq" },
  { title: "Blog", section: "Blog", url: "#blog" },
];

const contactInfo = [
  {
    icon: "fa-phone",
    label: "Phone",
    value: "+234 903 800 8374",
    href: "tel:+2349038008374",
  },
  {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    value: "+234 903 800 8374",
    href: "https://wa.me/2349038008374",
  },
  {
    icon: "fa-envelope",
    label: "Email",
    value: "hello@fielevents.com",
    href: "mailto:hello@fielevents.com",
  },
  {
    icon: "fa-map-marker-alt",
    label: "Office Address",
    value: "119, Old ipaja road, Agege Lagos",
  },
  {
    icon: "fa-clock",
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
  },
];

const socialLinks = [
  { icon: "fab fa-instagram", label: "Instagram", href: "#" },
  { icon: "fab fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fab fa-tiktok", label: "TikTok", href: "#" },
  { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "#" },
  { icon: "fab fa-pinterest-p", label: "Pinterest", href: "#" },
];

function scrollToHash(hash) {
  const target = document.getElementById(hash);
  if (!target) return;
  const offset = 80;
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [theme, setTheme] = useState("light");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [bookingValues, setBookingValues] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    budget: "",
    location: "",
    notes: "",
  });
  const [bookingErrors, setBookingErrors] = useState({});
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const filteredSearchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query.length < 2) return [];
    return searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.section.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setLightboxOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => {
        const input = document.getElementById("searchInput");
        input?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
    setSearchQuery("");
  }, [searchOpen]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleMobile = () => setMobileActive((prev) => !prev);
  const toggleSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);
  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);

  const handleAnchorClick = (event, href) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      setMobileActive(false);
      scrollToHash(href.substring(1));
    }
  };

  const handleSearchResultClick = (url) => {
    setSearchOpen(false);
    setSearchQuery("");
    scrollToHash(url.substring(1));
  };

  const handleBookingChange = (event) => {
    const { name, value } = event.target;
    setBookingValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateBooking = () => {
    const errors = {};
    if (!bookingValues.name.trim()) errors.name = true;
    if (
      !bookingValues.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingValues.email)
    )
      errors.email = true;
    if (!bookingValues.phone.trim()) errors.phone = true;
    if (!bookingValues.eventType.trim()) errors.eventType = true;
    if (!bookingValues.date.trim()) errors.date = true;
    if (!bookingValues.budget.trim()) errors.budget = true;
    return errors;
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    const errors = validateBooking();
    setBookingErrors(errors);
    if (Object.keys(errors).length === 0) {
      setBookingSubmitted(true);
      setTimeout(() => {
        setBookingSubmitted(false);
        setBookingValues({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          date: "",
          guests: "",
          budget: "",
          location: "",
          notes: "",
        });
      }, 3000);
    }
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail("");
      window.alert("Thank you for subscribing to FIEL Events!");
    }, 1500);
  };

  const handleSearchOverlayClick = (event) => {
    if (event.target.id === "searchModal") closeSearch();
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="nav-container">
          <a
            href="#home"
            className="logo"
            onClick={(e) => handleAnchorClick(e, "#home")}
          >
            <img
              src="/image/image1.png"
              alt="FIEL Events Logo"
              className="logo-img"
            />
          </a>
          <ul
            className={`nav-menu ${mobileActive ? "active" : ""}`}
            id="navMenu"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button
              className="icon-btn"
              id="themeToggle"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              <i
                className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
                id="themeIcon"
              />
            </button>
            <button
              className="icon-btn"
              id="searchToggle"
              aria-label="Search"
              onClick={toggleSearch}
            >
              <i className="fas fa-search" />
            </button>
            <a
              href="#booking"
              className="nav-cta"
              onClick={(e) => handleAnchorClick(e, "#booking")}
            >
              Book Consultation
            </a>
            <div
              className={`mobile-toggle ${mobileActive ? "active" : ""}`}
              id="mobileToggle"
              onClick={toggleMobile}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-label">Luxury Event Planning</span>
            <h1>
              Thoughtfully Created Events <em>Worth Remembering!!!</em>
            </h1>
            <p>
              At FIEL Events, we specialize in planning and managing events of
              varying scales from intimate gatherings to grand celebrations. Our
              work is guided by structure, attention to details and a commitment
              to quality execusion.
            </p>
            <div className="hero-buttons">
              <a
                href="#booking"
                className="btn btn-primary"
                onClick={(e) => handleAnchorClick(e, "#booking")}
              >
                <i className="fas fa-calendar-check" /> Book a Consultation
              </a>
              <a
                href="#portfolio"
                className="btn hero-btn-outline"
                onClick={(e) => handleAnchorClick(e, "#portfolio")}
              >
                <i className="fas fa-images" /> View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal-left">
              <img
                src="https://image.qwenlm.ai/public_source/e94230fc-3969-43cb-a53a-933ce59a2cf7/14142030e-6d88-4d28-9af8-d977c1e384a8.png"
                alt="FIEL Events Founder"
                loading="lazy"
              />
            </div>
            <div className="about-content reveal-right">
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                Creating Moments worth Remembering
              </h2>
              <p className="about-text">
                Every events deserves intentional planning, clear communication
                and a team commited to excellence. At FIEL Events we transform
                ideas into thoughtfully planned and beautifully executed
                experiences.
              </p>
              <p className="about-text">
                We specialize in full planning services, coordination and
                managing events of varying scales, working closely with trusted
                vendors and industry partners to bring each vision to life. Our
                process is intentional, organized, and detail-driven — ensuring
                every event is created with care and professionally managed from
                start to finish.
              </p>
              <div className="about-features">
                {aboutFeatures.map((feature) => (
                  <div className="about-feature" key={feature.title}>
                    <i className={`fas ${feature.icon}`} />
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section vm-section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title">Vision & Mission</h2>
            <p className="section-subtitle">
              Guided by passion and driven by excellence, we create celebrations
              that transcend the ordinary.
            </p>
          </div>
          <div className="vm-grid">
            {vmCards.map((card) => (
              <div
                className={`vm-card reveal ${card.title === "Our Vision" ? "reveal-left" : "reveal-right"}`}
                key={card.title}
              >
                <div className="vm-icon">
                  <i className={`fas ${card.icon}`} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              From intimate gatherings to grand celebrations, we offer a
              comprehensive suite of luxury event services tailored to your
              unique vision.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card reveal" key={service.title}>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a
                  href="#booking"
                  className="service-learn"
                  onClick={(e) => handleAnchorClick(e, "#booking")}
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Why FIEL</span>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We don't just plan events — we craft experiences that become
              cherished memories for a lifetime.
            </p>
          </div>
          <div className="why-grid">
            {whyCards.map((card) => (
              <div className="why-card reveal" key={card.title}>
                <div className="why-icon">
                  <i className={`fas ${card.icon}`} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Previous Events</h2>
            <p className="section-subtitle">
              A curated selection of our most memorable celebrations, each one a
              testament to our commitment to excellence.
            </p>
          </div>
          <div className="portfolio-filters reveal">
            {[
              "all",
              "weddings",
              "corporate",
              "birthdays",
              "luxury",
              "social",
            ].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                data-filter={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "all"
                  ? "All Events"
                  : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <div className="portfolio-grid" id="portfolioGrid">
            {filteredPortfolio.map((item) => (
              <div
                className="portfolio-item reveal"
                data-category={item.category}
                key={item.title}
                onClick={() => openLightbox(item.image)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="portfolio-zoom">
                  <i className="fas fa-expand" />
                </div>
                <div className="portfolio-overlay">
                  <span className="portfolio-category">
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </span>
                  <h3>{item.title}</h3>
                  <div className="portfolio-location">
                    <i className="fas fa-map-marker-alt" /> {item.location}
                  </div>
                  <p className="portfolio-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="lightbox active"
          id="lightbox"
          onClick={(e) => e.target.id === "lightbox" && closeLightbox()}
        >
          <button
            className="lightbox-close"
            id="lightboxClose"
            onClick={closeLightbox}
          >
            <i className="fas fa-times" />
          </button>
          <img id="lightboxImg" src={lightboxImage} alt="Portfolio" />
        </div>
      )}

      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Client Love</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Hear from the wonderful people who trusted FIEL Events with their
              most important celebrations.
            </p>
          </div>
          <div className="swiper reveal">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={30}
              loop
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.author}>
                  <div className="testimonial-card">
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, index) => (
                        <i key={index} className="fas fa-star" />
                      ))}
                    </div>
                    <p className="testimonial-text">{item.text}</p>
                    <div className="testimonial-author">
                      <img src={item.image} alt="Client" loading="lazy" />
                      <div>
                        <h4>{item.author}</h4>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              A seamless journey from your first consultation to the celebration
              of a lifetime.
            </p>
          </div>
          <div className="timeline">
            {timelineSteps.map((item, index) => (
              <div className="timeline-item reveal" key={item.title}>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="timeline-number">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section booking-section" id="booking">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Book Your Consultation</h2>
            <p className="section-subtitle">
              Ready to create something extraordinary? Fill out the form below
              and we'll get back to you within 24 hours.
            </p>
          </div>
          <form
            className="booking-form reveal"
            id="bookingForm"
            noValidate
            onSubmit={handleBookingSubmit}
          >
            <div className="form-grid">
              {[
                {
                  label: "Full Name",
                  name: "name",
                  type: "text",
                  required: true,
                },
                {
                  label: "Email Address",
                  name: "email",
                  type: "email",
                  required: true,
                },
                {
                  label: "Phone Number",
                  name: "phone",
                  type: "tel",
                  required: true,
                },
                {
                  label: "Event Type",
                  name: "eventType",
                  type: "select",
                  required: true,
                },
                {
                  label: "Preferred Date",
                  name: "date",
                  type: "date",
                  required: true,
                },
                {
                  label: "Estimated Guest Count",
                  name: "guests",
                  type: "number",
                  placeholder: "e.g., 100",
                },
                {
                  label: "Budget Range",
                  name: "budget",
                  type: "text",
                  required: true,
                },
                {
                  label: "Event Location",
                  name: "location",
                  type: "text",
                  placeholder: "City, Country",
                },
              ].map((field) => (
                <div
                  className={`form-group ${field.name === "notes" ? "full" : ""}`}
                  key={field.name}
                >
                  <label>
                    {field.label}{" "}
                    {field.required && <span className="required">*</span>}
                  </label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={bookingValues[field.name]}
                      onChange={handleBookingChange}
                      required={field.required}
                    >
                      <option value="">Select event type</option>
                      <option>Wedding</option>
                      <option>Birthday Party</option>
                      <option>Corporate Event</option>
                      <option>Conference</option>
                      <option>Product Launch</option>
                      <option>Baby Shower</option>
                      <option>Bridal Shower</option>
                      <option>Anniversary</option>
                      <option>Luxury Private Event</option>
                      <option>Other</option>
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={bookingValues[field.name]}
                      placeholder={field.placeholder || ""}
                      min={field.type === "number" ? "1" : undefined}
                      onChange={handleBookingChange}
                      required={field.required}
                    />
                  )}
                  {bookingErrors[field.name] && (
                    <div className="form-error">
                      Please enter a valid {field.label.toLowerCase()}
                    </div>
                  )}
                </div>
              ))}
              <div className="form-group full">
                <label>Additional Notes</label>
                <textarea
                  name="notes"
                  placeholder="Tell us about your dream event..."
                  value={bookingValues.notes}
                  onChange={handleBookingChange}
                />
              </div>
            </div>
            <button type="submit" className="form-submit">
              <i className="fas fa-calendar-check" />{" "}
              {bookingSubmitted
                ? "Consultation Booked Successfully!"
                : "Book Consultation"}
            </button>
          </form>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Packages</span>
            <h2 className="section-title">Pricing Packages</h2>
            <p className="section-subtitle">
              Every event is unique and so is our approach. Our planning
              services are designed to meet you wherever you are in your event
              journey. Following an initial consultation, we'll recommend the
              service level best suited to your needs and provide a tailored
              proposal.
            </p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                className={`pricing-card reveal${plan.featured ? " featured" : ""}`}
                key={plan.title}
              >
                {plan.featured && (
                  <div className="pricing-badge">Most Popular</div>
                )}
                <h3>{plan.title}</h3>
                {plan.sub && <p className="price-sub">{plan.sub}</p>}
                {plan.description && (
                  <p className="price-sub">{plan.description}</p>
                )}
                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <i className="fas fa-check" /> {feature}
                    </li>
                  ))}
                </ul>
                <h3>Best for:</h3>
                <p>{plan.bestFor}</p>
                <a
                  href="#booking"
                  className={`btn ${plan.buttonClass}`}
                  onClick={(e) => handleAnchorClick(e, "#booking")}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <div className="bespoke-promo reveal">
            <strong>Need Something Different?</strong>
            <p>
              Every event is unique. If your requirements fall outside these
              service levels, we'll create a bespoke planning package tailored
              specifically to your event.
            </p>
            <a
              href="#booking"
              className="btn btn-gold btn-auto"
              onClick={(e) => handleAnchorClick(e, "#booking")}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to the most common questions about our event planning
              services.
            </p>
          </div>
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <div
                className={`faq-item reveal ${activeFaqIndex === index ? "active" : ""}`}
                key={item.question}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setActiveFaqIndex(activeFaqIndex === index ? null : index)
                  }
                >
                  {item.question} <i className="fas fa-chevron-down" />
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="blog">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Our Blog</span>
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">
              Expert tips, trends, and inspiration to help you plan the perfect
              event.
            </p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article className="blog-card reveal" key={post.title}>
                <div className="blog-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>
                      <i className="fas fa-calendar" /> {post.date}
                    </span>
                    <span>
                      <i className="fas fa-tag" /> {post.tag}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  <a href="#" className="blog-read">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              We'd love to hear from you. Reach out through any of the channels
              below.
            </p>
          </div>
          <div className="contact-grid">
            <div className="reveal-left">
              {contactInfo.map((item, index) => (
                <div
                  className={`contact-info-card ${item.icon.includes("whatsapp") ? "contact-info-icon--whatsapp" : ""}`}
                  key={index}
                >
                  <div
                    className={`contact-info-icon ${item.icon.includes("fab") ? "" : ""}`}
                  >
                    <i className={item.icon} />
                  </div>
                  <div>
                    <h4>{item.label}</h4>
                    {item.href ? (
                      <p>
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                        >
                          {item.value}
                        </a>
                      </p>
                    ) : (
                      <p>
                        {item.value.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} aria-label={link.label}>
                    <i className={link.icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-map reveal-right">
              <iframe
                src="https://maps.google.com/maps?q=Old+Ipaja+Road,+Agege,+Lagos,+Lagos+State,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img
                  src="/image/image1.png"
                  alt="FIEL Events Logo"
                  className="logo-img"
                />
              </div>
              <p className="footer-about">
                Creating unforgettable luxury experiences through thoughtful
                creation, refined aesthetics, and dependable execution. We
                transform your dreams into extraordinary celebrations with care
                and professionalism.
              </p>
              <div className="footer-social">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} aria-label={link.label}>
                    <i className={link.icon} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Portfolio",
                  "Testimonials",
                  "Contact",
                ].map((text) => (
                  <li key={text}>
                    <a
                      href={`#${text === "Home" ? "home" : text.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) =>
                        handleAnchorClick(
                          e,
                          `#${text === "Home" ? "home" : text.toLowerCase().replace(/\s+/g, "-")}`,
                        )
                      }
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul className="footer-links">
                {[
                  "Wedding Planning",
                  "Corporate Events",
                  "Birthday Parties",
                  "Luxury Private Events",
                  "Destination Events",
                  "Event Decoration",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => handleAnchorClick(e, "#services")}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Newsletter</h4>
              <p className="footer-about">
                Subscribe for exclusive tips, trends, and inspiration delivered
                to your inbox.
              </p>
              <form
                className="newsletter-form"
                id="newsletterForm"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                />
                <button type="submit">
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
              <div className="footer-contact-item">
                <i className="fas fa-envelope" />
                <a href="mailto:hello@fielevents.com">hello@fielevents.com</a>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone" />
                <a href="tel:+2349038008374">+234 903 800 8374</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 FIEL Events. All rights reserved.</p>
            <p>
              Crafted with <i className="fas fa-heart footer-heart" /> for
              extraordinary celebrations
            </p>
          </div>
        </div>
      </footer>

      <div className="floating-buttons">
        <a
          href="https://wa.me/2349038008374"
          className="float-btn float-whatsapp"
          target="_blank"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp" />
          <span className="tooltip">Chat on WhatsApp</span>
        </a>
        <a
          href="#booking"
          className="float-btn float-book"
          aria-label="Book Consultation"
          onClick={(e) => handleAnchorClick(e, "#booking")}
        >
          <i className="fas fa-calendar-check" />
          <span className="tooltip">Book Consultation</span>
        </a>
      </div>

      {searchOpen && (
        <div
          className="search-modal active"
          id="searchModal"
          onClick={handleSearchOverlayClick}
        >
          <div className="search-box">
            <input
              id="searchInput"
              type="text"
              placeholder="Search our website..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button
              className="search-close"
              id="searchClose"
              type="button"
              onClick={closeSearch}
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="search-results" id="searchResults">
            {searchQuery.trim().length >= 2 ? (
              filteredSearchResults.length > 0 ? (
                filteredSearchResults.map((item) => (
                  <div
                    key={item.title}
                    className="search-result-item"
                    onClick={() => handleSearchResultClick(item.url)}
                  >
                    <h5>{item.title}</h5>
                    <p>{item.section}</p>
                  </div>
                ))
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  No results found
                </p>
              )
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
