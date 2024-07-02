import '../scss/styles.scss';
const rootStyles = document.documentElement.style;

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const fixTimeZero = number => (number < 10 ? '0' + number : number);
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

  //digital Clock
  hoursElement.textContent = fixTimeZero(hours);
  minutesElement.textContent = fixTimeZero(minutes);
  dayOfWeekElement.textContent = dayWeekObject[today];
  dayElement.textContent = date;
  monthElement.textContent = monthObject[currentMonth];
  yearElement.textContent = currentYear;

  //analogic Clock
  const getAnalogicSecond = (360 / 60) * seconds;
  const getAnalogicMinutes = (360 / 60) * minutes;
  const getAnalogicHour = (360 / 12) * hours;

  rootStyles.setProperty('--rotate-sec', getAnalogicSecond + 'deg');
  rootStyles.setProperty('--rotate-min', getAnalogicMinutes + 'deg');
  rootStyles.setProperty('--rotate-hour', getAnalogicHour + 'deg');
};

setInterval(() => {
  setClockTime();
}, 1000);

setClockTime();
