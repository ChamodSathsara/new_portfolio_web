import {
  Code,
  Layout,
  Server,
  Zap,
  Database,
  Globe,
  Laptop,
  Smartphone,
  Cloud,
  Shield,
} from "lucide-react";

export const services = [
  {
    title: "Frontend Development",
    description:
      "I specialize in building visually appealing, responsive, and user-friendly web applications using React.js, Next.js, Tailwind CSS, Material UI, Bootstrap, HTML, CSS, and JavaScript. I focus on creating seamless user experiences with optimized UI/UX design.",
    icon: Layout,
    animation: "card-hover-scale",
  },
  {
    title: "Fullstack Development",
    description:
      "I build end-to-end web applications, integrating frontend and backend technologies with seamless API connections. I have hands-on experience in MERN stack (MongoDB, Express.js, React.js, Node.js) and working with Next.js to develop high-performance full-stack applications.",
    icon: Code,
    animation: "card-hover",
  },
  {
    title: "Backend Development",
    description:
      "I develop robust and scalable backend systems using Node.js, Express.js, and .NET. I ensure efficient data handling, authentication, and business logic implementation for full-stack applications.",
    icon: Server,
    animation: "card-hover-rotate",
  },
  {
    title: "Web Performance Optimization",
    description:
      "I improve website speed and efficiency by implementing lazy loading, caching mechanisms, minimizing API calls, reducing bundle sizes, and optimizing database queries. My experience in performance tuning ensures a fast and smooth user experience.",
    icon: Zap,
    animation: "card-hover-shine",
  },
  {
    title: "API Development",
    description:
      "I design and develop RESTful APIs for seamless communication between frontend and backend. I focus on secure authentication, optimized request handling, and well-structured endpoints to enhance application performance.",
    icon: Globe,
    animation: "card-hover-scale",
  },
  {
    title: "Database Management",
    description:
      "I have experience in designing, managing, and optimizing databases using MongoDB and MySQL. I ensure data integrity, scalability, and efficient querying for high-performance applications.",
    icon: Database,
    animation: "card-hover-shine",
  },
  {
    title: "Responsive Web Design",
    description:
      "I create websites that look and function perfectly across all devices, from desktops to smartphones. Using modern CSS frameworks and responsive design principles, I ensure your site provides an optimal viewing experience for all users.",
    icon: Laptop,
  },
  {
    title: "Mobile App Development",
    description:
      "I develop cross-platform mobile applications using React Native that work seamlessly on both iOS and Android devices. My approach focuses on creating native-like experiences with a single codebase for efficient development.",
    icon: Smartphone,
  },
  {
    title: "Cloud Integration",
    description:
      "I implement cloud-based solutions using AWS, Azure, or Google Cloud to enhance scalability, reliability, and performance of web applications. This includes setting up servers, databases, storage, and continuous deployment pipelines.",
    icon: Cloud,
  },
];
