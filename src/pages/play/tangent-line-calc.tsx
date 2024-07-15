import { Helmet } from "react-helmet";
import Geogebra from "react-geogebra";
import "../../styles/play.scss";
import { useState } from "react";
import TangentLineChart, {
  tangentLineExpression,
} from "../../components/play/tangent-line-calc/charts";

export const info: playInfo = {
  title: "접선 계산기",
  thumbnail: "/thumbnails/tangent-line-calc.png",
  description: "접선이 정확히 무엇인지 빠르게 이해시켜 드릴게요.",
  path: "tangent-line-calc",
  element: <OnlineGeogebra />,
};

export default function OnlineGeogebra() {
  const [expr, setExpr] = useState("3*x^2 + 3x^1");
  const [a, setA] = useState(0);

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
        <p>Current Expr : {expr}</p>
        <p>
          {a}에서의 접선 : {tangentLineExpression(expr, a)}
        </p>
        <TangentLineChart polynomialExpr={expr} a={a} />
        <input
          value={expr}
          onChange={(e) => {
            setExpr(e.target.value);
          }}
        />
        <input
          value={a}
          min={-10}
          max={10}
          type="range"
          onChange={(e) => {
            setA(Number(e.target.value));
          }}
        />
      </div>
    </main>
  );
}
