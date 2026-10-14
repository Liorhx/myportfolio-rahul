import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading on mobile, or if already visited in this session, or if not on root
    if (window.innerWidth <= 768) return false;
    if (sessionStorage.getItem("portfolio_loaded") === "true") return false;
    if (window.location.pathname !== "/") return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const handleSetIsLoading = (state: boolean) => {
    setIsLoading(state);
    if (!state) {
      sessionStorage.setItem("portfolio_loaded", "true");
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    }
  };

  const value = {
    isLoading,
    setIsLoading: handleSetIsLoading,
    setLoading,
  };

  useEffect(() => {
    // If not loading, auto-start animations and restore overflow immediately
    if (!isLoading) {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          setTimeout(() => {
            module.initialFX();
          }, 80);
        }
      });
      return;
    }

    // Safety timeout: If loading is still true after 3.5s, auto-dismiss to prevent freeze
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("portfolio_loaded", "true");
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          module.initialFX();
        }
      });
    }, 3500);

    return () => clearTimeout(safetyTimer);
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
