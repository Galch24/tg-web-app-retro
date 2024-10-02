import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};
