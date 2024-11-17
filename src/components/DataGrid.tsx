import CardItem from "./Card";
import CardList from "./CardData";
import DataTable from "./Datatable";
import LineGraph from "./LineGraph";
import ProgressBars from "./ProgressBars";
import StackedBarChart from "./StackedBarChart";

const DataGrid = () => {
  return (
    <div className="mt-4 flex flex-col gap-7 w-full">
      {/* Row 1 */}
      <div className="flex flex-row gap-7 w-full h-[252px]">
        <div className=" flex-1 grid grid-rows-2 grid-cols-2 gap-7">
          <CardItem
            title="Customers"
            bgColorClass="bg-customBlue"
            textColorClass="text-[#1C1C1C]"
            count={"3,781"}
            percentageChange="+11.01%"
            variant="up" // Set the variant to "up" for the TrendingUp icon
          />
          <CardItem
            title="Orders"
            bgColorClass="bg-white bg-opacity-5"
            textColorClass="text-white"
            count={"1,219"}
            percentageChange="-0.03%"
            variant="down" // Set the variant to "up" for the TrendingUp icon
          />
          <CardItem
            title="Revenue"
            bgColorClass="bg-white bg-opacity-5"
            textColorClass="text-white"
            count={"$695"}
            percentageChange="+15.03%"
            variant="up" // Set the variant to "up" for the TrendingUp icon
          />
          <CardItem
            title="Growth"
            bgColorClass="bg-[#E5ECF6]"
            textColorClass="text-[#1C1C1C]"
            count={"30.1%"}
            percentageChange="+6.08%"
            variant="up" // Set the variant to "up" for the TrendingUp icon
          />
        </div>
        <div className="flex-1 bg-white bg-opacity-5 rounded-2xl p-6 flex flex-col gap-4 ">
          <p className="font-semibold text-sm">Projections vs Actuals</p>
          <div className="flex-1 flex justify-center w-full">
            <StackedBarChart />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row gap-7 w-full h-[318px]">
        <div className="w-[662px] h-full bg-white bg-opacity-5 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <p className="font-semibold text-sm">Revenue</p>
            <p className="text-white text-opacity-20">|</p>
            <div className="py-0.5 pr-2 pl-1 flex flex-row items-center">
              <div className="text-[#C6C7F8] w-4 h-4 flex justify-center items-center">
                &#x2022;
              </div>
              <div className="text-xs leading-[18px] flex items-center mr-1">
                Current Week
              </div>
              <div className="text-xs leading-[18px] flex items-center font-semibold">
                $58,211
              </div>
            </div>
            <div className="py-0.5 pr-2 pl-1 flex flex-row items-center">
              <div className="text-[#A8C5DA] w-4 h-4 flex justify-center items-center">
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
        <div className="flex-1 bg-white bg-opacity-5 rounded-2xl p-6 flex flex-col gap-4">
          <p className="font-semibold text-sm">Revenue by Location</p>
          {/* Map */}
          <div className="flex-1 bg-pink-300 rounded-lg"></div>
          {/* Stats */}
          <ProgressBars />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-row gap-7 w-full h-[344px]">
        <div className="w-[662px] h-full bg-white bg-opacity-5 rounded-2xl p-6 flex flex-col gap-1">
          <p className="font-semibold text-sm">Top Selling Products</p>
          <DataTable />
        </div>
        <div className="flex-1 bg-white bg-opacity-5 rounded-2xl p-6 flex flex-col gap-4 items-center">
          <p className="font-semibold text-sm w-full text-left">Total Sales</p>
          {/* Pie chart */}
          <div className="flex-1 bg-pink-300 rounded-lg w-full"></div>
          {/* Cards */}
          <CardList/>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
