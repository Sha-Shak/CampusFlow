import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MiniCalender() {
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && date.getDay() === 5) {
      return 'friday';
    }
    return null;
  };
  return (
    <div className="bg-white rounded-2xl p-5 text-lg w-80 text-center">
      <Calendar tileClassName={tileClassName} />
    </div>
  );
}

export default MiniCalender;
