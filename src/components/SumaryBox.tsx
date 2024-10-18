import React from "react";
import { SvgIconComponent } from "@mui/icons-material";

interface SummaryBoxProps {
  title: string;
  value: string | number;
  percentageChange: string | number;
  icon: SvgIconComponent;
  iconColor: string;
  percentageChangeColor: string;
}

const SummaryBox: React.FC<SummaryBoxProps> = ({
  title,
  value,
  percentageChange,
  icon: Icon,
  iconColor,
  percentageChangeColor,
}) => {
  return (
    <div className="min-w-[250px] dark:bg-[#484554] bg-white rounded-xl dark:border-none border p-[16px]">
      <h3 className="text-[#64748b]">{title}</h3>
      <div className="flex items-center gap-1">
        <p className="text-[#334155] lg:text-2xl font-semibold">{value}</p>
        <span className={`flex items-center text-sm font-semibold ${percentageChangeColor}`}>
          <Icon className={`text-xs ${iconColor}`} />
          <p>{percentageChange}%</p>
        </span>
      </div>
    </div>
  );
};

export default SummaryBox;
