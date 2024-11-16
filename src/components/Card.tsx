import { TrendingUp, TrendingDown } from "lucide-react";

interface CardItemProps {
  title: string;
  bgColorClass: string;
  textColorClass: string;
  count: string;
  percentageChange: string;
  variant: "up" | "down";
}

const CardItem = ({
  bgColorClass,
  textColorClass,
  count,
  percentageChange,
  variant,
  title,
}: CardItemProps) => {
  return (
    <div
      className={`rounded-2xl p-6 ${bgColorClass} ${textColorClass} font-semibold`}
    >
      <div className="text-sm">{title}</div>
      <div className="mt-2 flex justify-between items-center">
        <div className="text-2xl leading-9">{count}</div>
        <div className="flex items-center">
          <div className="text-xs leading-[18px]">{percentageChange}</div>
          {variant === "up" ? (
            <TrendingUp className="ml-1 w-4 h-4" />
          ) : (
            <TrendingDown className="ml-1 w-4 h-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
