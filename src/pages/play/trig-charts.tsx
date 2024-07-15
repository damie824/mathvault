import { useState } from "react";
import { Helmet } from "react-helmet";
import TrigFunctionPlotter from "../../components/play/visualtrig/charts";
import "../../styles/play.scss";

export const info: playInfo = {
  title: "삼각함수 그래프 관찰하기",
  thumbnail: "/thumbnails/trig-charts.png",
  description:
    "삼각함수 그래프에 어디에 어떤 값을 곱하냐에 따라 그래프가 어떻게 변하는지 관찰해 봅시다.",
  path: "trig-charts",
  element: <TrigCharts />,
};

export default function TrigCharts() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  return (
    <main className="play">
      <Helmet>
        <title>삼각함수 그래프g 관찰하기 - MathVault</title>
      </Helmet>
      <div className="play-title">
        <h3>{info.title}</h3>
        <p>Updated On July 14, 2024</p>
      </div>
      <div className="play-contents play-trig-charts">
        <TrigFunctionPlotter a={a} b={b} />
        <input
          type="range"
          min={-10}
          max={10}
          value={a}
          onChange={(e) => {
            setA(Number(e.target.value));
          }}
        />
        <p>Current a is : {a}</p>
        <input
          type="range"
          min={-10}
          max={10}
          value={b}
          onChange={(e) => {
            setB(Number(e.target.value));
          }}
        />
        <p>Current b is : {b}</p>
      </div>
    </main>
  );
}
