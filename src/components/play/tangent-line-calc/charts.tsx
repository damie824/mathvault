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

// Function to parse and evaluate expression
const parseExpression = (expr: string): ((x: number) => number) => {
  const terms = expr.split(/(?=[+-])/);
  return (x: number) => {
    return terms.reduce((acc: any, term: any) => {
      // Trim any whitespace from the term
      term = term.trim();

      if (term.includes("x")) {
        const [coeffStr, variable] = term.split("x");
        const coefficient = parseFloat(coeffStr) || (coeffStr === "-" ? -1 : 1);
        const power = variable ? parseInt(variable.replace("^", "")) : 1;
        return acc + coefficient * Math.pow(x, power);
      } else {
        const constant = parseFloat(term.replace("+ ", "").replace("- ", ""));
        return acc + (isNaN(constant) ? 0 : constant);
      }
    }, 0);
  };
};

export const tangentLineExpression = (expr: string, a: number): string => {
  //get parsed expression
  const parsedExpr = parseExpression(expr);

  //get tangent of line
  const differentiateExpr = differentiateExpression(expr);
  console.log(differentiateExpr);
  const parsedDifferentiate = parseExpression(differentiateExpr);
  const tangentOfLine = parsedDifferentiate(a);

  //return tangent line
  return `${tangentOfLine}x^1 + ${-tangentOfLine * a + parsedExpr(a)}`;
};

const TangentLineChart = ({
  polynomialExpr,
  a,
}: {
  polynomialExpr: string;
  a: number;
}) => {
  const labels = Array.from({ length: 201 }, (_, i) => i - 100); // -100 to 100

  const evaluateExpression = (expr: string, x: number): number => {
    try {
      const parsed = parseExpression(expr);
      return parsed(x);
    } catch (error) {
      console.error("Error evaluating expression:", error);
      return NaN;
    }
  };

  const tangentLineExpr = tangentLineExpression(polynomialExpr, a);

  const polynomial = (x: number): number =>
    evaluateExpression(polynomialExpr, x);
  const tangentLine = (x: number): number =>
    evaluateExpression(tangentLineExpr, x);

  const polynomialData = labels.map(polynomial);
  const tangentLineData = labels.map(tangentLine);

  const data = {
    labels,
    datasets: [
      {
        label: "입력한 식",
        data: polynomialData,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: `${a}에서의 접선`,
        data: tangentLineData,
        borderColor: "#4b4bc0",
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
        text: "Polynomial, Derivative, and Integral",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
      x: {
        min: -10,
        max: 10,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TangentLineChart;
