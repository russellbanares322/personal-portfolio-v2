import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase, SiGit, SiTailwindcss } from "react-icons/si";

export const techStacksData = [
  {
    id: 1,
    name: "ReactJS",
    icon: <FaReact className="text-2xl md:text-[2.3rem]" />,
    // color: "#5CCFEE",
  },
  {
    id: 2,
    name: "HTML",
    icon: <FaHtml5 className="text-2xl md:text-[2.3rem]" />,
    // color: "#EB5403",
  },
  {
    id: 3,
    name: "Css",
    icon: <FaCss3Alt className="text-2xl md:text-[2.3rem]" />,
    // color: "#2E49D4",
  },
  {
    id: 4,
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-2xl md:text-[2.3rem]" />,
  },
  {
    id: 5,
    name: "Firebase",
    icon: <SiFirebase className="text-2xl md:text-[2.3rem]" />,
    // color: "#F2C12B",
  },
  {
    id: 6,
    name: "Javascript",
    icon: <IoLogoJavascript className="text-2xl md:text-[2.3rem]" />,
    // color: "#EAD41C",
  },
  {
    id: 7,
    name: "Git",
    icon: <SiGit className="text-2xl md:text-[2.3rem]" />,
    // color: "#E84D31",
  },
];
