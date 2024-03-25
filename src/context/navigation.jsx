import { createContext, useEffect, useState } from "react";

const NavigationContex = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContex.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContex.Provider>
  );
}

export { NavigationProvider };
export default NavigationContex;
