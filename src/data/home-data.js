/** @typedef {import("../types/home").Course} Course */
/** @typedef {import("../types/home").Testimonial} Testimonial */
/** @typedef {import("../types/home").FooterLinkGroup} FooterLinkGroup */

/** Shared interface copy used by every component. */
export const copy = {
  brand: "ByteSpace",
  auth: {
    backToHome: "Back to home",
    login: {
      marketingTitle: "Sign in with ease",
      marketingDescription: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
      eyebrow: "Sign In",
      heading: "Welcome Back",
      submit: "Sign In",
      prompt: "New user?",
      link: "Create an account",
    },
    signup: {
      marketingTitle: "Sign up and come in",
      marketingDescription: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
      eyebrow: "Create an Account",
      headingFirstLine: "Welcome to",
      headingSecondLine: "ByteSpace",
      submit: "Continue",
      prompt: "Already have an account?",
      link: "Login",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Jamie Davis",
    },
    emailLabel: "Email",
    emailPlaceholder: "designer@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "********",
    or: "or",
    facebookLabel: "Continue with Facebook",
    googleLabel: "Continue with Google",
  },
  metadata: { title: "ByteSpace — Learn. Create. Grow.", description: "Discover practical courses and grow your skills with ByteSpace." },
  nav: { label: "Main navigation", home: "Home", courses: "Courses", creators: "Creators", signIn: "Sign In", join: "Join Us", shoppingBag: "Shopping bag" },
  search: { coursesLabel: "Search courses", coursePlaceholder: "Course, topic, creator", emailLabel: "Your email", emailPlaceholder: "Enter your email", button: "Search" },
  hero: { title: "Get Access to Hundreds Courses Available", description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.", learnerAlt: "Smiling learner studying on a laptop", category: "UI/UX Design", categoryStats: "200 Courses　•　1000+ Students" },
  courseCard: { featuredLessons: "17 Lessons", featuredDuration: "2 hours 16 mins", duration: "◷ 2 hours 10 mins", comments: "▤ 50 Comments", teacher: "By {teacher}", rating: "★ 4.5", level: "♧ Beginner", lifetime: " / lifetime", studentAlt: "Course student" },
  progress: { label: "Learning Progress", percentage: "55%" },
  happyStudents: { label: "Happy Students", rating: "4.5 (240)", alt: "ByteSpace student", count: "2K+" },
  courseSection: { title: "Discover Your Passion, Build Your Skills", description: "At ByteSpace Courses, we bring you close to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.", empty: "No courses found. Try a different search or category." },
  learningPaths: { title: "Explore Diverse Learning Paths at ByteSpace", description: "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories." },
  growth: { title: "Your Path to Professional Growth Starts Here!", description: "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.", revenue: "Total Revenue", revenuePeriod: "July 1-28", revenueAmount: "$120.29", yearToDate: "Year to Date", year: "2023", annualRevenue: "$1,200.38", increase: "+12$", creatorTitle: "Create & Manage Courses Easily.", creatorDescription: "ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.", creatorImageAlt: "Creator managing courses on a tablet" },
  creatorCta: { title: "Unlock Your Potential as a Creator with ByteSpace", description: "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.", button: "Join as Creator" },
  testimonials: { title: "Discover What Our Community Is Saying", description: "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform." },
  footer: { newsletter: "Stay up to date with our latest features and releases by joining our newsletter.", disclaimer: "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.", copyright: "© 2023 ByteSpace. All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings" },
  partners: { ariaLabel: "Trusted by teams" },
};

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

/** @type {{ title: string }[]} */
export const learningPaths = [
  { title: "Design" },
  { title: "Development" },
  { title: "IT & Software" },
  { title: "Business" },
  { title: "Marketing" },
  { title: "Photography" },
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
