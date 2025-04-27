import { useThemeColors } from "../hooks/useThemeColors";
import useStore from "../store/themeStore";
import blackLogo from "../assets/chaicode-black.svg";
import whiteLogo from "../assets/chaicode-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const themeColors = useThemeColors();
  const theme = useStore((state) => state.theme);

  const products = [
    { name: "Courses", href: "https://courses.chaicode.com/learn" },
    {
      name: "Cohort",
      href: "https://courses.chaicode.com/learn/view-all?show=batch&type=17",
    },
    {
      name: "Coding Hero",
      href: "https://courses.chaicode.com/learn/batch/about?bundleId=226894",
    },
    { name: "FreeAPI", href: "https://freeapi.app" },
    { name: "Masterji", href: "https://masterji.co/login" },
  ];

  const resources = [
    { name: "Docs", href: "/docs" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-services" },
    { name: "Pricing Policy", href: "/pricing-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  return (
    <div
      className="p-6 md:p-14 w-dvw z-10 font-['outfit'] "
      style={{
        background: themeColors.secondryBg,
        color: themeColors.text,
      }}
    >
      <div className="container flex flex-col items-center">
        <div className="flex justify-between w-full flex-col gap-5 md:flex-row">
          {/* Logo column */}
          <div className="flex flex-1 flex-col gap-3 ">
            <a className="flex h-10 gap-2" href="/">
              <div className="" style={{ transform: "scale(1.00161)" }}>
                <img
                  alt="ChaiCode"
                  width={180}
                  height={22}
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-auto"
                  style={{ color: "transparent" }}
                  src={theme == "dark" ? whiteLogo : blackLogo}
                />
              </div>
            </a>
            <p className="" style={{ color: themeColors.secondryText }}>
              Home for programmers
            </p>
            <div
              className="flex gap-4 "
              style={{ color: themeColors.secondryText }}
            >
              <a
                href="https://www.youtube.com/@chaiaurcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:-translate-y-1 dark:text-gray-500 hover:text-orange-500 "
              >
                {/* YouTube Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube h-5 w-5"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </a>
              {/* ... other social media links (Instagram, GitHub, Twitter, LinkedIn, Discord) ... */}
              <a
                href="https://www.instagram.com/hiteshchoudharyofficial/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:-translate-y-1 dark:text-gray-500 hover:text-orange-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://github.com/hiteshchoudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:-translate-y-1 dark:text-gray-500 hover:text-orange-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://x.com/hiteshdotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:-translate-y-1 dark:text-gray-500 hover:text-orange-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/in/hiteshchoudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:-translate-y-1 dark:text-gray-500 hover:text-orange-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://hitesh.ai/discord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:-translate-y-1 dark:text-gray-500 hover:text-orange-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square h-5 w-5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
            </div>
            <p
              className="text-sm opacity-70"
              style={{ color: themeColors.secondryText }}
            >
              © 2025ChaiCode. All rights reserved.
            </p>
          </div>
          {/* Links section */}
          <div className="flex flex-wrap gap-5  lg:gap-20 md:flex-row justify-between ">
            {/* Prducts column */}
            <div className="">
              <p
                className="text-white font-medium mb-4 w-28 duration-500 transition-all"
                style={{ color: themeColors.text }}
              >
                Products
              </p>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li
                    key={product.name}
                    style={{ color: themeColors.secondryText }}
                  >
                    <div className="hover:text-[#d97706] hover:font-semibold transition-transform duration-200 ease-in-out hover:translate-x-1">
                      <Link className="" to={product.href}>
                        {product.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Resources column */}
            <div>
              <p
                className="text-white font-medium mb-4 w-32"
                style={{ color: themeColors.text }}
              >
                Resources
              </p>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li
                    key={resource.name}
                    style={{ color: themeColors.secondryText }}
                  >
                    <div className="hover:text-[#d97706] hover:font-semibold transition-transform duration-200 ease-in-out hover:translate-x-1">
                      <Link className="transition-colors" to={resource.href}>
                        {resource.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* App column */}
            <div className="">
              <p
                className="text-white font-medium mb-4"
                style={{ color: themeColors.text }}
              >
                App
              </p>
              <Link to="https://apps.apple.com/in/app/chaicode/id6504993143">
                <button
                  data-slot="button"
                  className="whitespace-nowrap text-sm font-medium flex items-center justify-evenly gap-2 p-4 w-44 rounded-xl mb-3 hover:-translate-y-1 duration-300 transition-transform cursor-pointer"
                  style={{
                    background: themeColors.downloadAppBtnBg,
                    color: themeColors.text,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download h-5 w-5 flex-shrink-0"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-xs leading-tight">
                      Download on the
                    </span>
                    <span className="text-lg font-bold leading-tight">
                      App Store
                    </span>
                  </div>
                </button>
              </Link>
              <Link to="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share">
                <button
                  data-slot="button"
                  className="whitespace-nowrap text-sm font-medium flex items-center justify-evenly gap-4 p-4 rounded-xl w-44 hover:-translate-y-1 duration-300 transition-transform cursor-pointer"
                  style={{
                    background: themeColors.downloadAppBtnBg,
                    color: themeColors.text,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download h-5 w-5 flex-shrink-0"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-xs leading-tight">Get it on</span>
                    <span className="text-lg font-bold leading-tight">
                      Google Play
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden w-full flex justify-center">
          <h2
            className={`text-[4rem] sm:text-[7rem] my-5  md:text-[8rem] lg:text-[12rem] font-bold tracking-tighter leading-none ${
              theme === "dark" ? "text-gradient-orange" : "text-gradient-purple"
            }`}
          >
            CHAICODE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
