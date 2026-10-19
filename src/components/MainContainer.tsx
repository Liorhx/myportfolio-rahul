import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import Certifications from "./Certifications";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";
import { useLoading } from "../context/LoadingProvider";

const MainContainer = ({ children }: PropsWithChildren) => {
  const { isLoading } = useLoading();
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [shouldRenderCharacter, setShouldRenderCharacter] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
      setIsMobile(window.innerWidth <= 768);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;
    const timer = setTimeout(() => {
      setShouldRenderCharacter(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // When returning to home or loading finishes, guarantee responsiveness and scrolling
    if (!isLoading) {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
      import("./utils/initialFX").then((module) => {
        if (module.initialFX) {
          module.initialFX();
        }
      });
    }
  }, [isLoading]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && !isMobile && shouldRenderCharacter && children}
      <Landing />
      <About />
      <WhatIDo />
      <Career />
      <Work />
      <TechStackNew />
      <Certifications />
      <CallToAction />
      <Contact />
    </div>
  );
};

export default MainContainer;
