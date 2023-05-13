import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './MyCalendar.css';

function MiniCalender() {
  return (
    <div className="bg-white rounded-2xl p-5 text-lg w-80 text-center">
      <Calendar weekendDays={['Friday']} />
    </div>
  );
}

export default MiniCalender;
