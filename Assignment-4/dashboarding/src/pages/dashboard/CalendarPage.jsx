import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarPage = () => {
  return <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} initialView="dayGridMonth" />;
};

export default CalendarPage;