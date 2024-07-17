import { useState } from "react";
import { Helmet } from "react-helmet";
import TrigFunctionPlotter from "../../components/play/visualtrig/charts";
import "../../styles/play.scss";
import IrrationalNumberChart from "../../components/play/irrational-number-e/chart";

export const info: playInfo = {
  title: "확률은 진짜 작동할까요?",
  thumbnail: "/thumbnails/irrational-number-e.png",
  description:
    "확률과 통계, 진짜 작동할까요? 수백만 가지의 데이터로 직접 확인해 봐요.",
  path: "is-odd-really-work",
  element: <TrigCharts />,
};

export default function TrigCharts() {
  return (
    <main className="play">
      <Helmet>
        <title>{info.title} - MathVault</title>
      </Helmet>
      <div className="play-title">
        <h3>{info.title}</h3>
        <p>Updated On July 17, 2024</p>
      </div>
      <div className="play-contents play-trig-charts">
        <h4>// 개발중입니다.</h4>
      </div>
    </main>
  );
}
