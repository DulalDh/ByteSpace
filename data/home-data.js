/** @typedef {import("../types/home").Course} Course */
/** @typedef {import("../types/home").Testimonial} Testimonial */
/** @typedef {import("../types/home").ExploreCategory} ExploreCategory */
/** @typedef {import("../types/home").FooterLinkGroup} FooterLinkGroup */

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

/** @type {Course[]} */
export const courses = [
  {
    title: "Learn Figma from Basics",
    category: "UI/UX Design",
    teacher: "Lily Nguyen",
    price: "$25",
    image: "photo-1586717791821-3f44a563fa4c",
    students: "2.4k",
  },
  {
    title: "Build Digital Asset Portfolio",
    category: "Graphic Design",
    teacher: "Avery Collins",
    price: "$25",
    image: "photo-1545235617-9465d2a55698",
    students: "1.8k",
  },
  {
    title: "The Power of Big Data",
    category: "Data Science",
    teacher: "Jordan Lee",
    price: "$25",
    image: "photo-1551288049-bebda4e38f71",
    students: "3.2k",
  },
  {
    title: "Balancing Productivity and Life",
    category: "Productivity",
    teacher: "Maya Brooks",
    price: "$25",
    image: "photo-1498050108023-c5249f4df085",
    students: "980",
  },
  {
    title: "Mastering Money Management",
    category: "Business",
    teacher: "Noah Patel",
    price: "$25",
    image: "photo-1460925895917-afdab827c52f",
    students: "1.3k",
  },
  {
    title: "From Idea to Startup Success",
    category: "Freelance & Entrepreneurship",
    teacher: "Sam Rivera",
    price: "$25",
    image: "photo-1556761175-b413da4baf72",
    students: "2.1k",
  },
];

/** @type {ExploreCategory[]} */
export const learningPaths = [
  { icon: "✳", title: "Design" },
  { icon: "♙", title: "Development" },
  { icon: "▣", title: "IT & Software" },
  { icon: "▦", title: "Business" },
  { icon: "✣", title: "Marketing" },
  { icon: "▧", title: "Photography" },
];

/** @type {Testimonial[]} */
export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "photo-1534528741775-53994a69daeb",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "photo-1500648767791-00dcc994a43e",
    quote:
      "I’ve had several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "photo-1506794778202-cad84cf45f1d",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It’s fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const partnerNames = [
  "◉ Logopsum",
  "✺ Logopsum",
  "◈ Logopsum",
  "✿ Logopsum",
  "◍ Logopsum",
];
export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];
export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];
/** @type {FooterLinkGroup[]} */
export const footerLinkGroups = [
  {
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  { links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  {
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];
