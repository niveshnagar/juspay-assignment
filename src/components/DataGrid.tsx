import CardItem from "./Card";

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
        <div className="bg-emerald-500 flex-1 h-full"></div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row gap-7 w-full h-[318px]">
        <div className="bg-slate-400 w-[662px] h-full"></div>
        <div className="bg-amber-700 flex-1 h-full"></div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-row gap-7 w-full h-[344px]">
        <div className="bg-red-400 w-[662px] h-full"></div>
        <div className="bg-emerald-500 flex-1 h-full"></div>
      </div>
    </div>
  );
};

export default DataGrid;
