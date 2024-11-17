const data = [
  { city: 'New York', contribution: '72K', progress: 50 }, // 50% progress
  { city: 'San Francisco', contribution: '39K', progress: 45 }, // 75% progress
  { city: 'Sydney', contribution: '25K', progress: 30 }, // 30% progress
  { city: 'Singapore', contribution: '61K', progress: 70 }, // 30% progress
];

const ProgressBars = () => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col">
          {/* City and Contribution */}
          <div className="flex justify-between text-xs leading-[18px]">
            <div>{item.city}</div>
            <div>{item.contribution}</div>
          </div>

          {/* Progress Bar */}
          <div className="bg-[#FFFFFF66] dark:bg-[#1C1C1C66] w-full h-0.5 rounded-full">
            <div
              className=" bg-[#A8C5DA] dark:bg-[#A8C5DA] h-full rounded-full"
              style={{ width: `${item.progress}%` }} // Dynamic width based on progress
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
