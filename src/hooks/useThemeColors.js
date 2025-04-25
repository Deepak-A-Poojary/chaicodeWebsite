import { useEffect, useState } from "react";
import useStore from "../store/themeStore";

export const useThemeColors = () => {
  const theme = useStore((state) => state.theme);
  const getCurrentThemeColors = useStore(
    (state) => state.getCurrentThemeColors
  );

  const [themeColors, setThemeColors] = useState(() => getCurrentThemeColors());

  useEffect(() => {
    setThemeColors(getCurrentThemeColors());
  }, [theme, getCurrentThemeColors]);

  return themeColors;
};