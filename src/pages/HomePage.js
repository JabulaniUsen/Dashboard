import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SouthEast, NorthEast, } from "@mui/icons-material";
import SumaryBox from "../components/SumaryBox";
import { ChartComponent } from "../components/Chart";
import Carosal from "../components/Carosal";
import Table from "../components/Table";
const HomePage = () => {
    return (_jsxs("div", { className: "lg:py-2 py-16", children: [_jsx("header", { children: _jsxs("h2", { className: "text-lg", children: ["Welcome!", _jsx("span", { children: "\uD83D\uDC4B" }), " Here's your summary"] }) }), _jsxs("div", { className: "flex items-center gap-3 my-5 flex-wrap", children: [_jsx(SumaryBox, { title: "Total Events", value: "100,000", percentageChange: "+5.0", icon: NorthEast, iconColor: "text-green-600", percentageChangeColor: "text-green-600" }), _jsx(SumaryBox, { title: "Total Users", value: "50,000", percentageChange: "-3.2", icon: SouthEast, iconColor: "text-red-600", percentageChangeColor: "text-red-600" }), _jsx(SumaryBox, { title: "Total Users", value: "50,000", percentageChange: "-3.2", icon: SouthEast, iconColor: "text-red-600", percentageChangeColor: "text-red-600" }), _jsx(SumaryBox, { title: "Total Users", value: "50,000", percentageChange: "-3.2", icon: SouthEast, iconColor: "text-red-600", percentageChangeColor: "text-red-600" })] }), _jsxs("div", { className: "", children: [_jsx("p", { className: "text-lg front-semibold mb-2", children: "Event Registrations per month" }), _jsxs("div", { className: "grid lg:grid-cols-2 grid-cols-1 gap-4", children: [_jsx("div", { className: "chart rounded-md lg:w-auto w-full", children: _jsx(ChartComponent, {}) }), _jsx("div", { className: "carosal overflow-hidden", children: _jsx(Carosal, {}) })] })] }), _jsxs("div", { className: " mt-20", children: [_jsx("p", { className: "text-lg front-semibold mb-2", children: "Event History" }), _jsx(Table, {})] })] }));
};
export default HomePage;
