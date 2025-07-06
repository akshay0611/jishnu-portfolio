import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Jishnu",
  lastName: "Chauhan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Aspiring Developer | Tech Explorer | AI-Rounder Student",
  avatar: "/images/avatar.jpg",
  email: "jishnu.chauhan150606@gmail.com",
  location: "Asia/Kolkata", // Delhi, India
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about AI, technology trends, and share thoughts on the intersection of
      artificial intelligence and software development.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jishnu-chauhan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jishnu-chauhan-87624b36a",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Exploring AI, building projects, and learning new tech</>,
  featured: {
    display: true,
    title: <>B-Tech Student: <strong className="ml-4">AI & ML at ADGIPS'28</strong></>,
    href: "/about",
  },
  subline: (
    <>
      I'm Jishnu, a first-year B-Tech student at Dr. Akhilesh Das Gupta Institute of Professional Studies, New Delhi. I'm passionate about
      <br /> AI, backend development, and exploring the latest tech stacks that challenge my logic and creativity.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi! I'm Jishnu Chauhan, a first-year student at Dr. Akhilesh Das Gupta Institute of Professional Studies, New Delhi, and a proud alumnus of Shadley Public School, Rajouri Garden. Since my school days, I've been deeply curious about how technology works and how it can change the world. At Shadley, I wasn't just a student—I was involved in everything from science exhibitions, debate competitions, tech fests, to sports activities and cultural events. These experiences taught me leadership, teamwork, and how to stay disciplined while having fun. Today, my first priority is my work. I have a solid foundation in Python, MySQL, and prompt engineering, and I'm actively learning the latest tech stacks and tools from around the world. I love exploring AI, backend development, databases, and anything that challenges my logic and creativity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "GeeksforGeeks",
        timeframe: "October 2024 - Present (10 months)",
        role: "Volunteer",
        achievements: [
          <>
            Contributing to the tech community by creating educational content and helping fellow students with programming concepts.
          </>,
          <>
            Actively participating in coding challenges and technical discussions to enhance problem-solving skills.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Dr Akhilesh Das Gupta Institute of Technology & Management",
        description: <>Bachelor of Technology - BTech, Artificial Intelligence and Machine Learning (August 2024 - October 2028)</>,
      },
      {
        name: "Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
        description: <>Bachelor of Technology - BTech, Artificial Intelligence (2024)</>,
      },
      {
        name: "SHADLEY PUBLIC SCHOOL",
        description: <>Physics, Chemistry, Mathematics, English, Computer Science (April 2015 - April 2024)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Certifications",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python, MySQL - Building strong foundations in backend development and database management.</>,
        images: [],
      },
      {
        title: "AI & Prompt Engineering",
        description: <>Exploring AI applications and prompt engineering techniques for innovative solutions.</>,
        images: [],
      },
      {
        title: "Google Cloud Certifications",
        description: <>Inspect Rich Documents with Gemini Multimodality and Multimodal RAG, Deploy Kubernetes Applications on Google Cloud, Classify Images with TensorFlow on Google Cloud, Develop GenAI Apps with Gemini and Streamlit, Build Google Cloud Infrastructure for Azure Professionals.</>,
        images: [],
      },
      {
        title: "SEO & Marketing",
        description: <>Search Engine Optimization (SEO), Web Applications, and Keyword Advertising expertise.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI and tech...",
  description: `Read what ${person.name} has been up to recently - exploring AI, coding projects, and tech insights`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
