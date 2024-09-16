import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const mobile = 320;
  const tablet = 768;
  const desktop = 1200;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileWidth = windowWidth >= mobile && windowWidth <= tablet;
  const tabletWidth = windowWidth >= tablet && windowWidth <= desktop;
  const desktopWidth = windowWidth >= desktop;

  return { windowWidth, mobileWidth, tabletWidth, desktopWidth, windowHeight };
};
