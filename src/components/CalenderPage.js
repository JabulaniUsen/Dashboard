import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';
const CalendarPage = () => {
    const handleDateClick = (arg) => {
        alert(`Date clicked: ${arg.dateStr}`);
    };
    const handleEventClick = (info) => {
        alert(`Event: ${info.event.title}`);
    };
    return (_jsxs(Box, { sx: { p: 3 }, children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Event Calendar" }), _jsx(FullCalendar, { plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], initialView: "dayGridMonth", headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }, editable: true, selectable: true, dateClick: handleDateClick, events: [
                    { title: 'Event One', date: '2024-10-01' },
                    { title: 'Event Two', date: '2024-10-05' },
                    { title: 'Meeting', date: '2024-10-12', backgroundColor: 'red' },
                ], eventClick: handleEventClick })] }));
};
export default CalendarPage;
