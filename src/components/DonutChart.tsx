import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Direct", "Referral", "Organic", "Ads"],
    datasets: [
      {
        label: "Poll",
        data: [300.56, 180.24, 520.45, 150.3],
        backgroundColor: ["#C6C7F8", "#BAEDBD", "#95A4FC", "#B1E3FF"],
        borderWidth: 0, // Removes the outer border
        borderColor: "transparent", // Ensures no inner border between segments
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Disables the legend
      },
    },
    responsive: true, // Ensures responsiveness
    maintainAspectRatio: false, // Ensures it resizes according to container
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
