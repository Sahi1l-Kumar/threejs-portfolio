export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "QueryHive - Developer Q&A Platform",
    desc: "QueryHive is a community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world on topics ranging from web development to algorithms and data structures.",
    subdesc:
      "Built with Next.js, TypeScript, TailwindCSS, MongoDB, and ShadCN UI, QueryHive offers a comprehensive set of features for developer collaboration and knowledge sharing.",
    href: "https://query-hive.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Let's Build Something Great",
    pos: "Your Next Hire",
    duration: "Starting Soon?",
    title:
      "This space is reserved for our future collaboration. Hover to see what working together could look like! Ready to discuss how my skills can benefit your team? Contact me today.",
    icon: "/assets/collaboration.svg",
    animation: "clapping",
  },
  {
    id: 2,
    name: "The Palisadoes Foundation",
    pos: "Open Source Contributor",
    duration: "Feb 2024 – May 2024",
    title:
      "Led the development of a core feature in the platform regarding membership requests." +
      " Redesigned multiple UI components for improved usability and maintainability and wrote unit tests for each of them.",
    icon: "/assets/palisadoes.svg",
    animation: "victory",
  },
];
