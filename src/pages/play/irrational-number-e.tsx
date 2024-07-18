import { useState } from "react";
import { Helmet } from "react-helmet";
import TrigFunctionPlotter from "../../components/play/visualtrig/charts";
import "../../styles/play.scss";
import IrrationalNumberChart from "../../components/play/irrational-number-e/chart";

export const info: playInfo = {
  title: "e의 값은 어떻게 정의되었을까요?",
  thumbnail: "/thumbnails/irrational-number-e.png",
  description:
    "고등학교 교육과정 내에서 어떻게 무리수 e의 값을 정의하는지 체험해 봅시다.",
  path: "irrational-number-e",
  element: <IrrationalNumberE />,
};

export default function IrrationalNumberE() {
  const [a, setA] = useState(0);

  return (
    <main className="play">
      <Helmet>
        <title>{info.title} - MathVault</title>
      </Helmet>
      <div className="play-title">
        <h3>{info.title}</h3>
        <p>Updated On July 15, 2024</p>
      </div>
      <div className="play-contents play-trig-charts">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          현재 식 : (1+1/{a})^{a}
        </h3>
        <IrrationalNumberChart a={a} />
        <input
          type="range"
          min={0}
          max={100}
          value={a}
          onChange={(e) => {
            setA(Number(e.target.value));
          }}
        />
        <p>
          X가 {a}일 때의 e 값 : {Math.pow(1 + 1 / a, a)}
        </p>
      </div>
    </main>
  );
}
