import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import RowModal from '../components/RowModal';
import Data from '../data/Data';
import { ExpandLess, ExpandMore, FileDownloadDoneOutlined, NavigateBefore, NavigateNext, Search } from '@mui/icons-material';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
const Table = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        status: '',
        eventName: '',
        date: '',
    });
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortOrder, setSortOrder] = useState('asc');
    const [tableData, setTableData] = useState(Data());
    const [expandedRows, setExpandedRows] = useState([]);
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };
    const handleRowClick = (row) => {
        setSelectedRow(row);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleEditRow = (updatedRow) => {
        setTableData((prevData) => prevData.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
        closeModal();
    };
    const handleDeleteRow = (id) => {
        setTableData((prevData) => prevData.filter((row) => row.id !== id));
        closeModal();
    };
    const handleMarkComplete = (id) => {
        setTableData((prevData) => prevData.map((row) => (row.id === id ? { ...row, status: 'Complete' } : row)));
        closeModal();
    };
    const sortedData = [...tableData].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
    const filteredData = sortedData.filter((row) => {
        return ((filters.status ? row.status === filters.status : true) &&
            (filters.date ? row.date === filters.date : true) &&
            (searchQuery ? row.eventName.toLowerCase().includes(searchQuery.toLowerCase()) : true));
    });
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginatedData = filteredData.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text('Table Data', 14, 22);
        autoTable(doc, {
            head: [['Event Name', 'Date', 'Speaker', 'Status']],
            body: paginatedData.map((row) => [row.eventName, row.date, row.speaker, row.status]),
        });
        doc.save('table-data.pdf');
    };
    const toggleRowExpansion = (rowId) => {
        setExpandedRows((prevExpandedRows) => prevExpandedRows.includes(rowId)
            ? prevExpandedRows.filter((id) => id !== rowId)
            : [...prevExpandedRows, rowId]);
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: "filters flex items-center gap-3 lg:flex-row flex-col", children: [_jsxs("div", { className: "border p-2 rounded w-full lg:w-auto dark:bg-[#484554] dark:text-white dark:border-none flex items-center gap-2", children: [_jsx(Search, { className: 'text-[#94A3B8]' }), _jsx("input", { type: "text", placeholder: "Search", value: searchQuery, className: 'outline-none bg-transparent', onChange: handleSearch })] }), _jsx("div", { className: "border p-2 rounded w-full lg:w-auto dark:bg-[#484554] dark:text-white dark:border-none", children: _jsx("input", { type: "date", name: "date", className: 'outline-none bg-transparent', value: filters.date, onChange: handleFilterChange }) }), _jsxs("span", { className: 'p-2 lg:block hidden', children: ["Total Items: ", filteredData.length] }), _jsx("div", { className: "border p-2 rounded w-full lg:w-auto dark:bg-[#484554] dark:text-white dark:border-none", children: _jsxs("select", { name: "status", className: 'outline-none bg-transparent', value: filters.status, onChange: handleFilterChange, children: [_jsx("option", { value: "", children: "All Status" }), _jsx("option", { value: "Complete", children: "Complete" }), _jsx("option", { value: "In Progress", children: "In Progress" })] }) }), _jsx("div", { className: "border p-2 rounded w-full lg:w-auto dark:bg-[#484554] dark:text-white dark:border-none", children: _jsxs("select", { className: 'outline-none bg-transparent', value: sortOrder, onChange: (e) => setSortOrder(e.target.value), children: [_jsx("option", { value: "asc", children: " Most Recent " }), _jsx("option", { value: "desc", children: "Least Recent " })] }) }), _jsxs("div", { className: "border p-2 rounded w-full lg:w-auto dark:bg-[#484554] dark:text-white dark:border-none flex items-start gap-2", children: [_jsx(FileDownloadDoneOutlined, {}), _jsx("button", { className: "", onClick: exportToPDF, children: "Export" })] })] }), _jsx("div", { className: "w-full lg:hidden", children: paginatedData.map((row) => (_jsxs("div", { className: "border-b dark:border-gray-700", children: [_jsxs("div", { onClick: () => toggleRowExpansion(row.id), className: "flex justify-between items-center p-4 cursor-pointer dark:bg-[#484554] bg-[#F1F5F9]", children: [_jsx("div", { children: _jsx("span", { className: "font-semibold", children: row.eventName }) }), _jsxs("div", { className: "flex items-center", children: [_jsx("span", { onClick: () => handleRowClick(row), className: `px-3 py-1 rounded-full ${row.status === 'Complete' ? 'bg-[#d1fae5] text-[#10b981]' : 'bg-[#DBEAFE] text-[#3B82F6]'} dark:bg-transparent dark:border dark:border-${row.status === 'Complete' ? '[#10b981]' : '[#3B82F6]'}`, children: row.status }), expandedRows.includes(row.id) ? _jsx(ExpandLess, {}) : _jsx(ExpandMore, {})] })] }), expandedRows.includes(row.id) && (_jsx("div", { className: "p-4 bg-gray-50 dark:bg-gray-400", children: _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { children: [_jsx("span", { className: "", children: "Speaker: " }), row.speaker] }), _jsxs("div", { children: [_jsx("span", { className: "", children: "Date: " }), row.date] })] }) }))] }, row.id))) }), _jsxs("table", { className: "table-auto w-full lg:table hidden", children: [_jsx("thead", { className: 'dark:bg-[#6A6676] rounded bg-[#F1F5F9] dark:text-white', children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-5", children: "Event Name" }), _jsx("th", { className: "px-6 py-5", children: "Date" }), _jsx("th", { className: "px-6 py-5", children: "Speaker" }), _jsx("th", { className: "px-6 py-5", children: "Status" })] }) }), _jsx("tbody", { children: paginatedData.map((row) => (_jsxs("tr", { onClick: () => handleRowClick(row), style: { cursor: 'pointer' }, className: "hover:bg-gray-100 dark:bg-[#484554] dark:hover:bg-gray-600", children: [_jsx("td", { className: " px-4 py-5", children: row.eventName }), _jsx("td", { className: " px-4 py-5", children: row.date }), _jsx("td", { className: " px-4 py-5", children: row.speaker }), _jsx("td", { children: _jsxs("span", { className: ` px-3 py-1 rounded-full ${row.status === 'Complete' ? ' bg-[#d1fae5]  text-[#10b981] dark:bg-transparent dark:border dark:border-[#10b981]' : 'bg-[#DBEAFE] text-[#3B82F6] dark:bg-transparent dark:border dark:border-[#3B82F6]'}`, children: ["\u2022\u0301 ", row.status] }) })] }, row.id))) })] }), _jsxs("div", { className: "pagination my-4 flex", children: [_jsxs("div", { className: "", children: [_jsx("button", { className: ` text-[#8576ff] font-bold p-2 px-3 rounded bg-gray-300 dark:bg-[#484554]`, onClick: () => setCurrentPage((prev) => Math.max(prev - 1, 0)), disabled: currentPage === 0, children: _jsx(NavigateBefore, {}) }), Array.from({ length: 3 }, (_, index) => (_jsx("button", { className: `p-3 px-4 font-semibold mx-1 text-xs rounded-full ${index === currentPage ? 'bg-[#8576FF] text-white' : ''}`, onClick: () => setCurrentPage(index), children: index + 1 }, index))), _jsx("button", { className: ` text-[#8576ff] font-bold p-2 px-3 rounded bg-gray-300 dark:bg-[#484554]`, onClick: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1)), disabled: currentPage === totalPages - 1, children: _jsx(NavigateNext, {}) })] }), _jsx("div", { className: "" })] }), isModalOpen && selectedRow && (_jsx(RowModal, { row: selectedRow, onClose: closeModal, onEdit: handleEditRow, onDelete: handleDeleteRow, onMarkComplete: handleMarkComplete }))] }));
};
export default Table;
