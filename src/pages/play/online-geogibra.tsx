import { Helmet } from "react-helmet";
import Geogebra from "react-geogebra";
import "../../styles/play.scss";

export const info: playInfo = {
  title: "온라인 지오지브라",
  thumbnail: "/thumbnails/geogebra.png",
  description: "지오지브라를 온라인에서 사용해 보세요.",
  path: "geogebra",
};

export default function OnlineGeogebra() {
  return (
    <main className="play">
      <Helmet>
        <title>미분과 적분의 관계를 그래프로 알아보기 - MathVault</title>
      </Helmet>
      <div className="play-title">
        <h3>{info.title}</h3>
        <p>Updated On July 14, 2024</p>
      </div>
      <div className="play-contents play-polynomial-plotter">
        <Geogebra
          id={"geo"}
          appletOnLoad={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <p>
          지오지브라의 라이선스를 확인해 주세요.
          <br />
          <a target="_blank" href="https://www.geogebra.org/license">
            https://www.geogebra.org/license
          </a>
        </p>
      </div>
    </main>
  );
}
