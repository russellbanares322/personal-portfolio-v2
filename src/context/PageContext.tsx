import {
  RefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type PageProviderProps = {
  children: React.ReactNode;
};

export type TActiveNavLink = "Home" | "About" | "Projects" | "Contact" | "";

type TPageContext = {
  isDarkMode: boolean;
  handleToggleTheme: () => void;
  handleScrollToSection: (elementRef: RefObject<HTMLDivElement>) => void;
  handleScrollToTop: () => void;
  handleChangeActiveNavLink: (selectedNavLink: TActiveNavLink) => void;
  activeNavLink: string;
  projectsRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  techStacksRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
};

export const PageContext = createContext<TPageContext | null>(null);

const PageProvider = ({ children }: PageProviderProps) => {
  const [theme, setTheme] = useState("dark");
  const [activeNavLink, setActiveNavLink] = useState<TActiveNavLink>("");
  const isDarkMode = theme === "dark";

  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const techStacksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (elementRef: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setActiveNavLink("");
  };

  const handleChangeActiveNavLink = (selectedNavLink: TActiveNavLink) => {
    setActiveNavLink(selectedNavLink);
  };

  const handleToggleTheme = () => {
    let selectedTheme = "";
    if (isDarkMode) {
      setTheme("light");
      selectedTheme = "light";
    } else {
      setTheme("dark");
      selectedTheme = "dark";
    }
    localStorage.setItem("pageTheme", selectedTheme);
  };

  useEffect(() => {
    const checkTheme = localStorage.getItem("pageTheme");
    if (checkTheme) {
      setTheme(checkTheme);
    }
  }, []);

  return (
    <PageContext.Provider
      value={{
        isDarkMode,
        handleToggleTheme,
        handleScrollToSection,
        handleScrollToTop,
        handleChangeActiveNavLink,
        activeNavLink,
        projectsRef,
        aboutRef,
        techStacksRef,
        contactRef,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error(
      "usePageContext must be used within a ThemeContextProvider"
    );
  }

  return context;
};

export default PageProvider;
