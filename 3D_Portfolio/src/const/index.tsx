const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solver",
    desc: "Attention to Detail and Error, able to track issues to the source and solve them.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "Fast learner",
    desc: "Able to pick up things faster and adapt quickly to the latest technologies.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  // {
  //   name: "Git Version Control",
  //   imgPath: "/images/logos/git.svg",
  // },
];

export type TechModel =
  | {
      type: "gltf";
      name: string;
      modelPath: string;
      scale?: number;
      rotation?: [number, number, number];
    }
  | {
      type: "image";
      name: string;
      imgPath: string;
    };


const techStackIcons: TechModel[] = [
  {
    type: "gltf",
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    type: "gltf",
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    type: "gltf",
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    type: "gltf",
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    type: "image",
    name: "Angular Developer",
    imgPath: "/images/logos/angularjs-480.png",
  },
  // {
  //   name: "Git Version Control",
  //   modelPath: "/models/git-svg-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, -Math.PI / 4, 0],
  // },
];

const expCards = [
  {
    review:
      "",
    imgPath: "/images/path.png", // should be the img/icon/logo of the company where you work
    logoPath: "/images/mean stack.png",
    title: "MEAN Stack Developer Internship",
    date: "July 7, 2025 - 29 October, 2025",
    responsibilities: [
      "Strengthened my foundation in programming further in JavaScript and Typescript.",
      "Learned Angular and ExpressJs framework for Frontend and Backend. Started form v18 and up to latest.",
      "Developed a professional looking Ecommerce project using MEAN Stack.",
    ],
  },
  {
    review:
      "",
    imgPath: "/images/path.png", // should be the img/icon/logo of the company where you work
    logoPath: "/images/logos/react.png",
    title: "Frontend Developer",
    date: "July 2024 - Present",
    responsibilities: [
      "Built frontend web-applications to solidify my foundation in frontend concepts like state Management, lazy loading, optimization..",
      "Worked with custom API's and integrated them into some of my personal and final-year project.",
      "Finally created this amazing 3D portfolio using ReactJs, Tailwind CSS, ThreeJs and some frontend best practices.",
    ],
  },
  {
    review:
      "",
    imgPath: "/images/path.png", // should be the img/icon/logo of the company where you work
    logoPath: "/images/logos/AI.jpg",
    title: "AI Engineer",
    date: "July 2024 - July 2025",
    responsibilities: [
      "Developed an AI powered - Gesture based cricket coaching system for my Graduation Final Year Project.",
      "Used computer vision and latest object detection AI technologies like: yolo, mediapipe, opencv for analyzing player movement and finding body angles.",
      "Provided feedback to help improve the performance of our players.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "",
    mentions: "@handleName",
    review:
      "",
    imgPath: "/images/path.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/talalwaheed3",
    imgPath: "/images/github.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/talal-waheed-a7a122324/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
