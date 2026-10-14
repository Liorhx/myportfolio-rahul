import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));
import { LoadingProvider } from "./context/LoadingProvider";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0b080c" }} />}>
                <MainContainer>
                  <Suspense fallback={null}>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            }
          />
          <Route
            path="/myworks"
            element={
              <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0b080c", padding: "40px", color: "#fff" }}>Loading...</div>}>
                <MyWorks />
              </Suspense>
            }
          />
          <Route
            path="/play"
            element={
              <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0b080c", padding: "40px", color: "#fff" }}>Loading...</div>}>
                <Play />
              </Suspense>
            }
          />
        </Routes>
      </LoadingProvider>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
