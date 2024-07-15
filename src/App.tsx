import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./pages/main";
import "./styles/global.scss";
import GlobalHeader from "./components/global/header";
import TrigCharts from "./pages/play/trig-charts";
import PolynomialPlotter from "./pages/play/polynomial-plotter";
import AboutPage from "./pages/about";
import OnlineGeogebra from "./pages/play/online-geogibra";
import GlobalFooter from "./components/global/footer";
import PlayPage from "./pages/play";

function App() {
  const playFiles = (require as any).context("./pages/play", false, /\.tsx$/);

  const playInfos: playInfo[] = playFiles.keys().map((key: string) => {
    const module = playFiles(key);
    return module.info;
  });

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
          <Route path="/play" element={<PlayPage />} />
          {playInfos.map((playInfo, i) => (
            <Route path={`/play/${playInfo.path}`} element={playInfo.element} />
          ))}
        </Routes>
      </BrowserRouter>
      <GlobalFooter />
    </div>
  );
}

export default App;
