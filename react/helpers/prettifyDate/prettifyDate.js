const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const NUM_SUFFIXES = ["st", "nd", "rd", "th"];

const prettifyDayNumber = day => {
  const dayStr = day.toString();
  const lastNumStr = dayStr[dayStr.length - 1];
  const lastNum = +lastNumStr;
  const suffix = NUM_SUFFIXES[lastNum]
    ? NUM_SUFFIXES[lastNum]
    : NUM_SUFFIXES[3];

  return `${dayStr}${suffix}`;
};

const prettifyHourMins = hour => {
  const hourStr = hour.toString();
  const prefix = hourStr.length === 1 ? "0" : "";
  return `${prefix}${hourStr}`;
};

export const prettifyDate = dateStr => {
  const date = new Date(dateStr);

  return `${prettifyDayNumber(date.getDate() + 1)} ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()} at ${prettifyHourMins(
    date.getHours()
  )}:${prettifyHourMins(date.getMinutes())}`;
};
