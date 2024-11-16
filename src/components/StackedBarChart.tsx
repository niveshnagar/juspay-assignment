import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "cyan",
        data: [17, 21, 18, 22, 16, 21],
        backgroundColor: "#A8C5DA",
        barThickness: "25",
      },
      {
        label: "light",
        data: [22, 26, 23, 29, 19, 26],
        backgroundColor: "#A8C5DA80",
        borderRadius: "4",
        barThickness: "25",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false, // Removes vertical grid lines
        },
      },
      y: {
        border: {
          width: 0, // Hide the y-axis line
        },
        grid: {
          drawBorder: false, // Hides the axis line
          color: "#FFFFFF0D",
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
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disables the legend
      },
    },
  };

  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
