import React from "react";

type CardData = {
  label: string;
  amount: string;
  dotColor: string;
};

// Card Component
const Card: React.FC<CardData> = ({ label, amount, dotColor }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex">
        <div
          className={`w-4 h-4 flex justify-center items-center text-lg`}
          style={{ color: dotColor }}
        >
          &#x2022;
        </div>
        <div className="">{label}</div>
      </div>
      <div>{amount}</div>
    </div>
  );
};

// Main Component with Mock Data
const CardList: React.FC = () => {
  const mockData = [
    { label: "Direct", amount: "$300.56", dotColor: "#C6C7F8" },
    { label: "Referral", amount: "$180.24", dotColor: "#BAEDBD" },
    { label: "Organic", amount: "$520.45", dotColor: "#95A4FC" },
    { label: "Paid Ads", amount: "$150.30", dotColor: "#B1E3FF" },
  ];

  return (
    <div className="flex flex-col gap-3 text-xs leading-[18px] w-full">
      {mockData.map((item, index) => (
        <Card
          key={index}
          label={item.label}
          amount={item.amount}
          dotColor={item.dotColor}
        />
      ))}
    </div>
  );
};

export default CardList;
