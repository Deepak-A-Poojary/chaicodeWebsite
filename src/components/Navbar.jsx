import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useStore from "../store/themeStore";
import { useThemeColors } from "../hooks/useThemeColors";
import useResponsive from "../hooks/useResponsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  CohortIcon,
  BookIcon,
  DocsIcon,
  ReviewIcon,
} from "../components/customIcon/index";
import ButtonText from "../constants/ButtonText";
import logoWhite from "../../src/assets/chaicode-white.png";
import logoBlack from "../../src/assets/chaicode-black.png";
import logoForMobile from "../../src/assets/chai-gray.png";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const themeColors = useThemeColors();
  const toggleTheme = useStore((state) => state.toggleTheme);
  const theme = useStore((state) => state.theme);
  const imgColor = theme === "light" ? "black" : "white";
  const [activeLink, setActiveLink] = useState(false);
  const location = useLocation();

  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);
  const { isMobile } = useResponsive();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Update active link based on the current path
    switch (location.pathname) {
      case "/Reviews":
        setActiveLink("Reviews");
        break;
      default:
        setActiveLink();
    }
  }, [location.pathname]);

  // Animate navbar on mount
  useGSAP(() => {
    if (navbarRef.current) {
      gsap.from(navbarRef.current, {
        y: -10,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
    }
  });

  // Animate sidebar
  useGSAP(() => {
    if (!isMobile || !sidebarRef.current) return;

    const sidebar = sidebarRef.current;

    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
      gsap.to(sidebar, { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      document.body.classList.remove("overflow-hidden");
      gsap.to(sidebar, { x: "-100%", duration: 0.5, ease: "power3.in" });
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen, isMobile]);

  //When click on logo go back to top

  const handleLogoClick = () => {
    // Smooth scroll to the top using GSAP ScrollToPlugin
    gsap.to(window, {
      scrollTo: 0,
      duration: 1, // 1 second for smooth scrolling
      ease: "power2.out", // Smooth easing
    });
  };

  const NavLinks = () => (
    <>
      <HashLink
        className="hover:text-[#FE9332] transition duration-200"
        smooth
        scroll={(el) => {
          const yOffset = -90; // change this to control the offset
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }}
        to="/#cohorts"
      >
        <CohortIcon />
      </HashLink>
      <HashLink
        to={"/#udemy"}
        smooth
        scroll={(el) => {
          const yOffset = -90; // change this to control the offset
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }}
        className="hover:text-[#FE9332] transition duration-200"
      >
        <BookIcon />
      </HashLink>
      <Link
        to={"https://docs.chaicode.com/"}
        className="hover:text-[#FE9332] transition duration-200"
      >
        <DocsIcon />
      </Link>
      <Link
        to={"/Reviews"}
        onClick={() => setActiveLink("Reviews")}
        className="hover:text-[#FE9332] transition duration-200"
      >
        <ReviewIcon
          style={{
            color:
              activeLink === "Reviews" && !isMobile
                ? "#ff6e00"
                : themeColors.text,
          }}
          iconStyles={{
            color:
              activeLink === "Reviews" && !isMobile
                ? "#ff6e00"
                : themeColors.text,
          }}
        />
      </Link>
    </>
  );

  useEffect(() => {
    if (!isMobile || !sidebarRef.current) return;
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      document.body.classList.remove("overflow-hidden");
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }

    return () => document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
  }, [isSidebarOpen]);

  return (
    <>
      {/* Logo always visible */}
      <div
        className="flex items-center justify-between sticky top-0 z-50 p-4"
        style={{ background: themeColors.navbarBgColor }}
        ref={navbarRef}
      >
        <Link to="/" onClick={handleLogoClick}>
          {isMobile ? (
            <img
              id="logo"
              src={logoForMobile}
              alt="logo"
              className="h-10 w-auto"
            />
          ) : (
            <img
              id="logo"
              src={imgColor === "black" ? logoBlack : logoWhite}
              alt="logo"
              className="h-10 w-auto"
            />
          )}
        </Link>

        {isMobile ? (
          <button
            className="text-2xl"
            style={{ color: themeColors.text }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
        ) : (
          <>
            <nav
              className="flex gap-5 text-[0.9em] items-center"
              style={{ color: themeColors.text }}
            >
              <NavLinks />
            </nav>
            <section className="flex gap-3 font-semibold">
              <button
                className="px-4 rounded-md py-2 cursor-pointer text-center duration-500 transition-all hover:text-[#f9ba32] text-nowrap"
                onClick={toggleTheme}
                style={{
                  border: `1px solid ${themeColors.borderColor}`,
                }}
              >
                {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
              </button>
              <ButtonText className={"max-w-28"} text={"Login"} />
            </section>
          </>
        )}
      </div>

      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-40 transition-all duration-150 ease-in-out "
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className="fixed top-0 left-0 w-[75%] h-full z-50  p-6 flex flex-col gap-6 shadow-lg"
            style={{
              transform: "translateX(-100%)",
              background: themeColors.MenuBarBgColor,
            }}
          >
            <img
              id="logo"
              src={imgColor === "black" ? logoBlack : logoWhite}
              alt="logo"
              className="h-10 w-auto"
            />
            <nav className="flex flex-col text-xl gap-4 items-center py-10">
              <NavLinks />
            </nav>

            <section className="flex flex-col items-center gap-4 font-semibold mt-auto">
              <button
                className="px-4 py-2 w-40 cursor-pointer border rounded-md hover:text-[#f9ba32]"
                onClick={toggleTheme}
                style={{
                  color: themeColors.text,
                  background: themeColors.MainThemeColor,
                  borderColor: themeColors.borderColor,
                }}
              >
                {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
              </button>
              <ButtonText className={"w-40"} text={"Login"} />
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
