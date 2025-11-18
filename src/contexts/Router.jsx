import { useState, useEffect, createContext, useContext } from "react";

const RouterContext = createContext();

export const useRouter = () => useContext(RouterContext);

export const Router = ({ children, id }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      <div id={id}>{children}</div>
    </RouterContext.Provider>
  );
};

export const Link = ({ to, children, className }) => {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export const Outlet = ({ routes }) => {
  const { currentPath } = useRouter();
  return routes[currentPath] || <div>404 Not Found</div>;
};
