export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"];

export const MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const getTodaysDate = () => {
  const date = new Date();
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};

export const getPrettyDate = (dateStr) => {
  const dateParts = dateStr.split("-");
  const month = parseInt(dateParts[0]) - 1; // Account for Date offset
  const calDay = parseInt(dateParts[1]);
  const year = parseInt(dateParts[2]);

  const date = new Date(year, month, calDay);
  const day = DAYS[date.getDay()];

  return `${day}, ${MONTHS[parseInt(dateParts[0] - 1)]} ${calDay}`;
};

export const changeDate = (dateStr, delta) => {
  const date = new Date(dateStr);
  // Go back or go forward one day depending on delta
  date.setDate(date.getDate() + delta);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};
