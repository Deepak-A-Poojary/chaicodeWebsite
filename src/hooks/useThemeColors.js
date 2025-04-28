import { useEffect, useState } from "react";
import useThemeStore from "../store/themeStore";

export const useThemeColors = () => {
  const theme = useThemeStore((state) => state.theme);
  const getCurrentThemeColors = useThemeStore(
    (state) => state.getCurrentThemeColors
  );

  const [themeColors, setThemeColors] = useState(() => getCurrentThemeColors());

  useEffect(() => {
    setThemeColors(getCurrentThemeColors());
  }, [theme, getCurrentThemeColors]);

  return themeColors;
};