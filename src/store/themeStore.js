import { create } from "zustand";

// All your theme color definitions here
const themeColors = {
  dark: {
    // Main
    MainThemeColor: "rgba(40, 40, 40, 1)",
    background:
      "linear-gradient(162deg, rgba(40, 40, 40, 1) 0%, rgba(30, 30, 30, 1) 25%, rgba(20, 20, 20, 1) 50%, rgba(20, 20, 20, 1) 75%)",
    secondryBg:
      "linear-gradient(180deg,  rgba(20, 20, 20, 1)  33%, rgba(10, 10, 10, 1) 73%)",
    text: "#dcdcdc",
    secondryText: "#a3a9ae",
    borderColor: "#4e545b",

    // Navbar styles
    navbarBgColor: "rgba(20, 20, 20, 0.95)",

    // Card styles
    TweetCardBgColor: "rgba(40, 40, 40, 1)",
    cardBgColor: "rgba(38, 38, 38, 1)",
    cardSecondaryBgColor: "rgba(31,41,55, 1)",
    BenifitCardBgColor: "rgba(28,28,28, 1)",
    UdemyCardBgColor: "rgba(28,28,28, 1)",
    AlumniBgColor: "rgba(20, 20, 20, 0.95)",
    topicsCardBg: "rgba(28,28,28, 1)",
    cardBorderColor: "rgba(80, 80, 80, 0.8)",

    // Button styles
    buttonBg: "rgba(20, 20, 20, 0.95)",
    downloadAppBtnBg: "rgb(197, 85, 0)",
    buttonActiveBg: "#0091ff",

    // MenuBar styles
    MenuBarBgColor: "rgba(20, 20, 20, 1)",

    // youtube section colors
    ytProfileBg: "#2b2a2a",
    ytCardBg: "#1b1a1a",
    ytTextColor: "#ededed",
    ytLinkColor: "#FF7043",
    ytLinkHoverColor: "#FF7043",
    ytBorderColor: "#3b3b3b",

    //other colors
    cursorBg: "linear-gradient(to right, rgb(215, 73, 0), rgb(245, 158, 11))",
    cursorCardBg:
      "linear-gradient(to right, rgba(249, 115, 22, 0.2), rgb(250, 250, 250, 0))",
    ratingColor: "#cf9106",
    terminalBg: "#262626",
    alumniPlanentBg: "rgba(238,239,239, 1)",
    policyBtnColor: "#d97706",
  },
  light: {
    // Main
    MainThemeColor: "rgba(255, 255, 255, 0.95)",
    background:
      "linear-gradient(162deg, rgba(230, 230, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)",
    secondryBg:
      "linear-gradient(180deg, rgba(250, 250, 250, 0)  0%, rgba(250, 250, 250, 0)  50%, rgba(250, 250, 250, 1) 73%)",
    text: "#1c1e21",
    secondryText: "#52525b",
    borderColor: "#a5b3ce",

    // Navbar styles
    navbarBgColor: "rgba(255, 255, 255, 0.95)",

    // Card styles
    TweetCardBgColor: "rgba(245, 245, 255, 1)",
    cardBgColor: "rgba(250, 250, 250, 1)",
    cardSecondaryBgColor: "rgba(228,229,229, 1)",
    BenifitCardBgColor: "rgba(238,239,239, 1)",
    UdemyCardBgColor: "rgba(238,239,239, 1)",
    AlumniBgColor: "rgba(255, 255, 255, 0.95)",
    topicsCardBg: "rgba(238,239,239, 1)",
    cardBorderColor: "rgba(190, 190, 200, 0.6)",

    // Button styles
    buttonBg: "rgba(255, 255, 255, 1)",
    downloadAppBtnBg: "rgba(126, 2, 157,1)",
    buttonActiveBg: "#0056b3",

    // MenuBar button styles
    MenuBarBgColor: "#F3F4F6",

    // youtube section colors
    ytProfileBg: "#dfe1e1",
    ytCardBg: "#ededed",
    ytTextColor: "#010101",
    ytLinkColor: "#FFA726",
    ytLinkHoverColor: "#FF7043",
    ytBorderColor: "#d1d5db",

    //Other colors
    cursorBg:
      "linear-gradient(162deg, rgba(192, 79, 219, 1) 50%, rgba(255, 255, 255, 1) 100%)",
    cursorCardBg:
      "linear-gradient(162deg, rgba(192, 79, 219, 0.2) 0%, rgba(255, 255, 255, 0) 70%)",
    ratingColor: "#cf9106",
    terminalBg: "#fcfbfb",
    alumniPlanentBg: "#83059d",
    policyBtnColor: "#d97706",
  },
};

// Utility function to get system theme
const getSystemTheme = () => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Create the Zustand store
const useThemeStore = create((set, get) => {
  // const initialTheme =
  //   typeof window !== "undefined"
  //     ? localStorage.getItem("theme") || getSystemTheme()
  //     : "light";

  const initialTheme = "grey";

  return {
    theme: initialTheme,
    colors: themeColors[initialTheme],

    // Toggle between light and dark theme
    toggleTheme: () => {
      const currentTheme = get().theme;
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");

      set({
        theme: newTheme,
        colors: themeColors[newTheme],
      });
    },

    // Helper method to get current theme colors
    getCurrentThemeColors: () => {
      const currentTheme = get().theme;
      return themeColors[currentTheme] || themeColors.light;
    },
  };
});

export default useThemeStore;
