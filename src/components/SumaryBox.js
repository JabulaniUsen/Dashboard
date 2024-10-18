import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SummaryBox = ({ title, value, percentageChange, icon: Icon, iconColor, percentageChangeColor, }) => {
    return (_jsxs("div", { className: "min-w-[250px] w-full lg:w-[250px] dark:bg-[#484554] bg-white rounded-md dark:border-none border p-[16px]", children: [_jsx("h3", { className: "text-[#64748b] dark:text-white text-sm", children: title }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx("p", { className: "text-[#334155] dark:text-white lg:text-2xl font-semibold", children: value }), _jsxs("span", { className: `flex items-center text-xs font-semibold ${percentageChangeColor}`, children: [_jsx(Icon, { className: `text-xs ${iconColor}` }), _jsxs("p", { children: [percentageChange, "%"] })] })] })] }));
};
export default SummaryBox;
