import { useState } from "react";
import { Helmet } from "react-helmet";
import TrigFunctionPlotter from "../../components/play/visualtrig/charts";
import "../../styles/play.scss";
import IrrationalNumberChart from "../../components/play/irrational-number-e/chart";
import OddCheckConsole from "../../components/play/is-odd-really-works/console";

export const info: playInfo = {
  title: "확률은 진짜 작동할까요?",
  thumbnail: "/thumbnails/irrational-number-e.png",
  description:
    "확률과 통계, 진짜 작동할까요? 수백만 가지의 데이터로 직접 확인해 봐요.",
  path: "is-odd-really-work",
  element: <TrigCharts />,
};

export default function TrigCharts() {
  const [items, setItems] = useState<oddItem[]>([]);

  return (
    <main className="play">
      <Helmet>
        <title>{info.title} - MathVault</title>
      </Helmet>
      <div className="play-title">
        <h3>{info.title}</h3>
        <p>Updated On July 19, 2024</p>
      </div>
      <div className="play-contents play-trig-charts">
        <OddCheckConsole count={1000} itemTypes={items} />
      </div>
      <div className="odd-items-inputs-container">
        {items.map((item, i) => (
          <div key={i}>
            <input
              onChange={(e) => {
                const newItems = [...items];
                newItems[i].type = e.target.value;
                setItems(newItems);
              }}
              value={item.type}
            />
            <input
              onChange={(e) => {
                const newItems = [...items];
                newItems[i].quantity = Number(e.target.value);
                setItems(newItems);
              }}
              type="number"
              value={item.quantity}
            />
            <input
              onChange={(e) => {
                const newItems = [...items];
                newItems[i].probability = Number(e.target.value);
                setItems(newItems);
              }}
              type="number"
              value={item.probability}
            />
            <button
              onClick={() => {
                const newItems = items.filter((_, index) => index !== i);
                setItems(newItems);
              }}
            >
              삭제
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newItems = [...items];
            newItems.push({ type: "", quantity: 0, probability: 0 });
            setItems(newItems);
          }}
        >
          추가
        </button>
      </div>
    </main>
  );
}
