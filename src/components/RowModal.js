import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import avatars from '../../public/avatars.svg';
import { ExitToAppRounded } from '@mui/icons-material';
const RowModal = ({ row, onClose, onEdit, onDelete, onMarkComplete }) => {
    const handleEdit = () => {
        const updatedRow = { ...row, name: `${row.name} (edited)` }; // Example edit
        onEdit(updatedRow);
    };
    const handleDelete = () => {
        onDelete(row.id);
    };
    const handleMarkComplete = () => {
        onMarkComplete(row.id);
    };
    return (_jsx(motion.div, { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsxs(motion.div, { className: "bg-white flex flex-col gap-5 rounded-lg shadow-lg lg:w-[30rem] dark:bg-[#484554] w-96", initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: 50, opacity: 0 }, children: [_jsx("button", { className: "absolute right-5 top-4", onClick: onClose, children: _jsx(ExitToAppRounded, {}) }), _jsxs("div", { className: "head px-8 pt-8", children: [_jsx("h1", { className: 'text-xl', children: row.eventName }), _jsx("h3", { className: 'text-gray-400', children: row.date })] }), _jsx("p", { className: " px-8", children: "Deep dive into the world of business" }), _jsxs("div", { className: "px-8", children: [_jsx("img", { src: avatars, alt: "" }), _jsxs("p", { className: 'text-gray-400', children: ["1 Guest Speaker:", _jsx("span", { children: row.speaker })] }), _jsx("p", { className: 'text-gray-400', children: "300 Attendees" })] }), _jsxs("div", { className: "flex lg:flex-row p-8 flex-col justify-between mt-6 dark:bg-[#ADA9BB]", children: [_jsx("button", { onClick: handleEdit, className: "  dark:bg-white dark:text-black px-4 border py-2 rounded hover:bg-gray-200 transition-colors", children: "Edit" }), _jsxs("div", { className: "flex lg:flex-row flex-col lg:items-center lg:mt-0 mt-4 gap-3", children: [_jsx("button", { onClick: handleDelete, className: "bg-[#F43F5E] text-white px-4 py-2 rounded hover:bg-red-600 transition-colors", children: "Delete" }), _jsx("button", { onClick: handleMarkComplete, className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors", children: "Mark Complete" })] })] })] }) }));
};
export default RowModal;
