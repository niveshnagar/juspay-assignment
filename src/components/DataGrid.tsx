import CardItem from "./Card";
import CardList from "./CardData";
import DataTable from "./Datatable";
import DonutChart from "./DonutChart";
import LineGraph from "./LineGraph";
import ProgressBars from "./ProgressBars";
import StackedBarChart from "./StackedBarChart";
import WorldMap from "../../assets/World-Map.png";

const DataGrid = () => {
  return (
    <div className="mt-4 flex flex-col gap-7 w-full">
      {/* Row 1 */}
      <div className="flex flex-row gap-7 w-full h-[252px]">
        {/* Row 1 Cell 1 */}
        <div className=" flex-1 grid grid-rows-2 grid-cols-2 gap-7">
          <CardItem
            title="Customers"
            bgColorClass="bg-[#E3F5FF]  dark:bg-[#E3F5FF]"
            textColorClass="text-[#1C1C1C] dark:text-[#1C1C1C]"
            count={"3,781"}
            percentageChange="+11.01%"
            variant="up" // Set the variant to "up" for the TrendingUp icon
          />
          <CardItem
            title="Orders"
            bgColorClass="bg-[#F7F9FB] dark:bg-[#FFFFFF0D]"
            textColorClass="text-[#1C1C1C] dark:text-white"
            count={"1,219"}
            percentageChange="-0.03%"
            variant="down" // Set the variant to "up" for the TrendingUp icon
          />
          <CardItem
            title="Revenue"
            bgColorClass="bg-[#F7F9FB] dark:bg-[#FFFFFF0D]"
            textColorClass="text-[#1C1C1C] dark:text-white"
            count={"$695"}
            percentageChange="+15.03%"
            variant="up" // Set the variant to "up" for the TrendingUp icon
          />
          <CardItem
            title="Growth"
            bgColorClass="bg-[#E5ECF6] dark:bg-[#E5ECF6]"
            textColorClass="text-[#1C1C1C] dark:text-[#1C1C1C]"
            count={"30.1%"}
            percentageChange="+6.08%"
            variant="up" // Set the variant to "up" for the TrendingUp icon
          />
        </div>
        {/* Row 1 Cell 2 */}
        <div className="bg-[#F7F9FB] dark:bg-[#FFFFFF0D]  flex-1 rounded-2xl p-6 flex flex-col gap-4 ">
          <p className="font-semibold text-sm">Projections vs Actuals</p>
          <div className="flex-1 flex justify-center w-full">
            <StackedBarChart />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row gap-7 w-full h-[318px]">
        {/* Row 2 Cell 1 */}
        <div className="bg-[#F7F9FB] dark:bg-[#FFFFFF0D] w-[662px] h-full rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <p className=" text-[#1C1C1C] dark:text-white  font-semibold text-sm">
              Revenue
            </p>
            <p className="text-[#1C1C1C33] dark:text-[#FFFFFF33]">|</p>
            <div className="text-[#1C1C1C] dark:text-white   py-0.5 pr-2 pl-1 flex flex-row items-center">
              <div className="text-[#1C1C1C] dark:text-[#C6C7F8] w-4 h-4 flex justify-center items-center">
                &#x2022;
              </div>
              <div className=" text-xs leading-[18px] flex items-center mr-1">
                Current Week
              </div>
              <div className=" text-xs leading-[18px] flex items-center font-semibold">
                $58,211
              </div>
            </div>
            <div className="text-[#1C1C1C] dark:text-white   py-0.5 pr-2 pl-1 flex flex-row items-center">
              <div className=" text-[#A8C5DA] dark:text-[#A8C5DA] w-4 h-4 flex justify-center items-center">
                &#x2022;
              </div>
              <div className="text-xs leading-[18px] flex items-center mr-1">
                Previous Week
              </div>
              <div className="text-xs leading-[18px] flex items-center font-semibold">
                $68,768
              </div>
            </div>
          </div>
          {/* Line Graph */}
          <div className="flex-1 flex justify-center w-full">
            <LineGraph />
          </div>
        </div>
        {/* Row 2 Cell 2 */}
        <div className="bg-[#F7F9FB] dark:bg-[#FFFFFF0D] text-[#1C1C1C] dark:text-white flex-1 rounded-2xl p-6 flex flex-col gap-4">
          <p className="font-semibold text-sm">Revenue by Location</p>
          {/* Map */}
          <div className="flex-1  rounded-lg flex justify-center w-full">
            <img
              src={WorldMap}
              className="h-[90px] w-[200px] object-cover object-left-bottom"
              alt="World Map"
            />
          </div>
          {/* Stats */}
          <ProgressBars />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-row gap-7 w-full h-[344px]">
        {/* Row 3 Cell 1 */}
        <div className="bg-[#F7F9FB] dark:bg-[#FFFFFF0D] w-[662px] h-full rounded-2xl p-6 flex flex-col gap-1">
          <p className="text-[#1C1C1C] dark:text-white font-semibold text-sm">Top Selling Products</p>
          <DataTable />
        </div>

        {/* Doughnut chart */}
        <div className="bg-[#F7F9FB] dark:bg-[#FFFFFF0D]  flex-1 rounded-2xl p-6">
          <div className="text-[#1C1C1C] dark:text-white flex flex-col gap-4 items-center h-full max-w-full">
            <p className="font-semibold text-sm w-full text-left">
              Total Sales
            </p>
            {/* Chart */}
            <div className="flex-1 w-[150px]">
              <DonutChart />
            </div>

            {/* Cards */}
            <CardList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
