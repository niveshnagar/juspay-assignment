import { themeAtom } from "@/atoms/theme.atom";

import { useRecoilValue } from "recoil";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const theme = useRecoilValue(themeAtom);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 18, 17, 12, 14, 22], // Data points for the first line
        borderColor: "#A8C5DA", // Line color (blue)
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Background fill (optional)
        fill: false, // Whether the area under the line is filled
        tension: 0.3, // Smoothness of the line
        pointRadius: 0, // Remove points from the line
        pointHoverRadius: 0, // No points on hover
      },
      {
        label: "Dataset 2",
        data: [15, 10, 12, 16, 21, 23], // Data points for the second line
        borderColor: theme === "light" ? "#1C1C1C" : "#C6C7F8", // Line color (purple)
        backgroundColor: "rgba(239, 68, 68, 0.2)", // Background fill (optional)
        fill: false, // Whether the area under the line is filled
        tension: 0.3, // Smoothness of the line
        pointRadius: 0, // Remove points from the line
        pointHoverRadius: 0, // No points on hover
        segment: {
          borderDash: (ctx) => {
            const index = ctx.p0DataIndex; // Current data point index
            // Apply dashed style after April (index 3)
            return index >= 3 ? [6, 6] : undefined;
          },
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        beginAtZero: true, // Start y-axis from 0
        border: {
          width: 0, // Hide the y-axis line
        },
        grid: {
          drawBorder: false, // Hides the axis line
          color: theme === "light" ? "#1C1C1C0D" : "#FFFFFF1A",
          lineWidth: 2,
          borderDash: [10, 5], // Creates a dashed effect
          borderDashOffset: 0, // Start position of dashes
          lineCap: "round", // Rounds the ends of grid lines
        },
        ticks: {
          stepSize: 10, // Interval between grid lines
          min: 0, // Set the minimum value to 0
          max: 30, // Set the maximum value slightly above your data's max value
          callback: function (value: number) {
            if (value === 0) return 0;
            return value / 1 + "M"; // Format ticks as 10M, 20M, etc.
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
