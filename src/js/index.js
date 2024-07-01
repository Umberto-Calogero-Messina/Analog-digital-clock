import '../scss/styles.scss';
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const dayWeekObject = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthObject = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const setClockTime = () => {
  const realTime = new Date();
  const hours = realTime.getHours();
  const minutes = realTime.getMinutes();
  const seconds = realTime.getSeconds();
  const today = realTime.getDay(); //CurrectDayOfWeek
  const date = realTime.getDate(); //CurrectDay
  const currentMonth = realTime.getMonth();
  const currentYear = realTime.getFullYear();

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  dayOfWeekElement.textContent = dayWeekObject[today];
  dayElement.textContent = date;
  monthElement.textContent = monthObject[currentMonth];
  yearElement.textContent = currentYear;
};

setInterval(() => {
  setClockTime();
}, 1000);

setClockTime();
