import { jsx as _jsx } from "react/jsx-runtime";
import { Chart } from "react-google-charts";
export const data = [
    ["Records", "Months"],
    ["Jan", 650],
    ["Feb", 900],
    ["Mar", 770],
    ["Apr", 420],
    ["May", 1000],
    ["June", 590],
    ["Jul", 830],
    ["Aug", 520],
    ["Sep", 830],
    ["Oct", 620],
    ["Nov", 900],
    ["Dec", 600],
];
export const options = {
    chartArea: { width: "70%" },
    hAxis: {
        minValue: 0,
    },
    vAxis: {},
    colors: ['#8576FF'],
};
export function ChartComponent() {
    return (_jsx(Chart, { chartType: "ColumnChart", width: "100%", height: "320px", data: data, options: options, className: "" }));
}
