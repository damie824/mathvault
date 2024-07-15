import { useState } from "react";
import { Helmet } from "react-helmet";
import "../../styles/play.scss";
import PolynomialPlotterChart, {
  differentiateExpression,
  integrateExpression,
} from "../../components/play/polynomial/charts";

export const info: playInfo = {
  title: "미분과 적분의 관계를 그래프로 알아보기",
  thumbnail: "/thumbnails/polynomial-plotter.png",
  description:
    "함수의 그래프를 이용해 미분과 적분엔 어떤 관계가 있는지 생각해 봅시다.",
  path: "polynomial-plotter",
  element: <PolynomialPlotter />,
};

export default function PolynomialPlotter() {
  const [expr, setExpr] = useState("3*x^2 + 3x^1");

  return (
    <main className="play">
      <Helmet>
        <title>{info.title} - MathVault</title>
      </Helmet>
      <div className="play-title">
        <h3>{info.title}</h3>
        <p>Updated On July 14, 2024</p>
      </div>
      <div className="play-contents play-polynomial-plotter">
        <p>Current Expr : {expr}</p>
        <p>미분됨 : {differentiateExpression(expr)}</p>
        <p>적분됨 : {integrateExpression(expr)}</p>
        <PolynomialPlotterChart polynomialExpr={expr} />
        <input
          value={expr}
          onChange={(e) => {
            setExpr(e.target.value);
          }}
        />
      </div>
    </main>
  );
}
