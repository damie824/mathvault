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

export const differentiateExpression = (expr: string): string => {
  const terms = expr.split(/(?=[+-])/);
  const derivedTerms = terms
    .map((term: string) => {
      // Split term into coefficient and variable part
      let [coeffStr, variable] = term.split("x");

      if (!variable) {
        return "";
      }

      coeffStr = coeffStr.replace("+ ", "").replace("- ", "");
      // Parse coefficient, handle cases like -x or x (implicitly 1)
      let coefficient = parseFloat(coeffStr) || 1;

      // Parse power of variable
      let power = variable ? parseInt(variable.replace("^", "")) : 1;

      if (isNaN(power)) {
        power = 1;
      }

      // Return empty string for invalid terms
      if (isNaN(coefficient) || isNaN(power)) return "";

      // Calculate derivative term
      const newCoefficient = coefficient * power;
      const newPower = power - 1;

      // Return formatted term based on power
      if (newPower === 0) return `${newCoefficient}`;
      if (newPower === 1) return `${newCoefficient}*x`;
      if (newPower < 0) return ""; // Ignore negative powers
      return `${newCoefficient}*x^${newPower}`;
    })
    .filter((term) => term !== "");

  // Join terms with '+' and replace '+-' with '-'
  const derivativeExpr = derivedTerms.join(" + ").replace(" + -", " - ");

  console.log(`미분한 식: ${derivativeExpr}`);
  return derivativeExpr;
};

export const integrateExpression = (expr: string): string => {
  const terms = expr.split(/(?=[+-])/);
  const integratedTerms = terms.map((term) => {
    // Split term into coefficient and variable part
    let [coeffStr, variable] = term.split("x");

    coeffStr = coeffStr.replace("+ ", "").replace("- ", "");

    let coefficient = parseFloat(coeffStr) || 1;

    let power = variable ? parseInt(variable.replace("^", "")) : 1;

    if (isNaN(power)) {
      power = 1;
    }

    if (isNaN(coefficient) || isNaN(power)) return "";

    const newPower = power + 1;
    const newCoefficient = coefficient / newPower;

    if (newPower === 1) return `${newCoefficient}*x`;
    return `${newCoefficient}*x^${newPower}`;
  });

  // Join terms with '+' and replace '+-' with '-'
  const integralExpr = integratedTerms.join(" + ").replace(/\+\-/g, " - ");

  console.log(`적분한 식: ${integralExpr}`);
  return integralExpr;
};

const PolynomialPlotterChart = ({
  polynomialExpr,
}: {
  polynomialExpr: string;
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

  // Function to parse and evaluate expression
  const parseExpression = (expr: string): ((x: number) => number) => {
    const terms = expr.split(/(?=[+-])/);
    return (x: number) => {
      return terms.reduce((acc: any, term: any) => {
        // Trim any whitespace from the term
        term = term.trim();

        console.log(term);

        if (term.includes("x")) {
          const [coeffStr, variable] = term.split("x");
          const coefficient =
            parseFloat(coeffStr) || (coeffStr === "-" ? -1 : 1);
          const power = variable ? parseInt(variable.replace("^", "")) : 1;
          return acc + coefficient * Math.pow(x, power);
        } else {
          const constant = parseFloat(term.replace("+ ", "").replace("- ", ""));
          return acc + (isNaN(constant) ? 0 : constant);
        }
      }, 0);
    };
  };

  const derivativeExpr = differentiateExpression(polynomialExpr);
  const integralExpr = integrateExpression(polynomialExpr);

  const polynomial = (x: number): number =>
    evaluateExpression(polynomialExpr, x);
  const derivative = (x: number): number =>
    evaluateExpression(derivativeExpr, x);
  const integral = (x: number): number => evaluateExpression(integralExpr, x);

  const polynomialData = labels.map(polynomial);
  const derivativeData = labels.map(derivative);
  const integralData = labels.map(integral);

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
        label: "미분한 식",
        data: derivativeData,
        borderColor: "rgba(153,102,255,1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "적분한 식",
        data: integralData,
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

export default PolynomialPlotterChart;
