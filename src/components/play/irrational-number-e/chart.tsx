import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { differentiateExpression } from "../polynomial/charts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const IrrationalNumberChart = ({ a = 1 }) => {
  const labels = Array.from({ length: 201 }, (_, i) => i - 100); // -100 to 100

  const getE = (x: number): number => {
    return Math.pow(1 + 1 / x, x);
  };

  const polynomial = (x: number): number => getE(x);
  const currentE = (x: number): null | number => {
    if (a === x) {
      return getE(x);
    }
    return null;
  };

  const polynomialData = labels.map(polynomial);
  const currentEData = labels.map(currentE);

  const data = {
    labels,
    datasets: [
      {
        label: `x가 ${a}일 때 e의 값`,
        data: currentEData,
        borderColor: "#c04b4b",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "X에 따른 e 변화량",
        data: polynomialData,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "X에 따른 E의 값 찾기",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
      x: {
        min: 0,
        max: 200,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default IrrationalNumberChart;
