import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import { config } from "../config";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    // If mobile or touch device, do not run Lenis to preserve native touch scrolling
    if (window.innerWidth <= 768) {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
      return;
    }

    // Initialize Lenis smooth scroll for laptop/desktop
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // If portfolio was already loaded or on return from other pages, start immediately!
    const isAlreadyLoaded = sessionStorage.getItem("portfolio_loaded") === "true";
    if (isAlreadyLoaded) {
      lenis.start();
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    } else {
      lenis.stop();
    }

    // Handle smooth scroll animation frame
    let rafId: number;
    function raf(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle navigation links
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 768) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              if (lenis) {
                lenis.scrollTo(target, {
                  offset: 0,
                  duration: 1.2,
                });
              } else {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }
          }
        }
      });
    });

    // Handle resize
    const resizeHandler = () => {
      lenis?.resize();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeHandler);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          {config.developer.fullName.split(" ").map(n => n[0]).join("")}
        </a>
        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
