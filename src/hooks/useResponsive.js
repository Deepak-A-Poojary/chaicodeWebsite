import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 39.999rem)" }); // < 640px
  const isSmall = useMediaQuery({ query: "(min-width: 40rem) and (max-width: 47.999rem)" }); // 640px - 767px (sm)
  const isTablet = useMediaQuery({ query: "(min-width: 48rem) and (max-width: 79.999rem)" }); // 1024px - 1279px (lg)
  const isDesktop = useMediaQuery({ query: "(min-width: 80rem)" }); // ≥ 1280px (xl+)

  const isTouchDevice = 
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0);

  return { isMobile, isSmall, isTablet, isDesktop, isTouchDevice };
};

export default useResponsive;
