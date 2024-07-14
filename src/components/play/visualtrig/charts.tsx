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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TrigFunctionPlotter = ({ a = 1, b = 1 }: { a?: number; b?: number }) => {
  const labels = Array.from({ length: 360 }, (_, i) => i); // 0 to 359 degrees

  const sinData = labels.map((x) => a * Math.sin((b * x * Math.PI) / 180));
  const cosData = labels.map((x) => a * Math.cos((b * x * Math.PI) / 180));
  const tanData = labels.map((x) => a * Math.tan((b * x * Math.PI) / 180));

  const data = {
    labels,
    datasets: [
      {
        label: `${a} * sin(${b} * x)`,
        data: sinData,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: `${a} * cos(${b} * x)`,
        data: cosData,
        borderColor: "rgba(153,102,255,1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: `${a} * tan(${b} * x)`,
        data: tanData,
        borderColor: "rgba(255,159,64,1)",
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
        text: "Trigonometric Functions",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: a * -1,
        max: a * 1,
      },
      x: {
        min: -360,
        max: 360,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TrigFunctionPlotter;
