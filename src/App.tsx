import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./pages/main";
import "./styles/global.scss";
import GlobalHeader from "./components/global/header";
import ToolsPage from "./pages/tools/tools";
import TrigCharts from "./pages/play/trig-charts";
import PolynomialPlotter from "./pages/play/polynomial-plotter";
import AboutPage from "./pages/about";
import OnlineGeogebra from "./pages/play/online-geogibra";
import GlobalFooter from "./components/global/footer";

function App() {
  function useDocumentWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return width;
  }

  const documentWidth = useDocumentWidth();

  if (documentWidth < 800) {
    return (
      <div>
        <GlobalHeader />
        <main className="not-support">
          <h1>MathVault는 해당 스크린 환경을 지원하지 않아요.</h1>
          <p>쾌적한 유저 경험을 위해, 더욱 큰 스크린을 사용해 주세요!</p>
        </main>
        <GlobalFooter />
      </div>
    );
  }

  return (
    <div className="App">
      <GlobalHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/play" element={<ToolsPage />} />
          <Route path="/play/trig-charts" element={<TrigCharts />} />
          <Route
            path="/play/polynomial-plotter"
            element={<PolynomialPlotter />}
          />
          <Route path="/play/geogebra" element={<OnlineGeogebra />} />
        </Routes>
      </BrowserRouter>
      <GlobalFooter />
    </div>
  );
}

export default App;
