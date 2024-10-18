import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import timeGridPlugin from '@fullcalendar/timegrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { Box } from '@mui/material';

const CalendarPage: React.FC = () => {
  const handleDateClick = (arg: any) => {
    alert(`Date clicked: ${arg.dateStr}`);
  };

  const handleEventClick = (info: any) => {
    alert(`Event: ${info.event.title}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <h2 className="text-2xl font-bold mb-4">Event Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth" 
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        editable={true}
        selectable={true}
        dateClick={handleDateClick}
        events={[
          { title: 'Event One', date: '2024-10-01' },
          { title: 'Event Two', date: '2024-10-05' },
          { title: 'Meeting', date: '2024-10-12', backgroundColor: 'red' },
        ]}
        eventClick={handleEventClick}
      />
    </Box>
  );
};

export default CalendarPage;
