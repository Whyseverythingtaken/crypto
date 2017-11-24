export function formatDate(day, month, year) {
  const dateString = `${month} ${day}, ${year}`;
  const date = new Date(dateString);
  date.setDate(date.getDate());

  const formattedDate = date.toISOString().substring(0, 10);
  return formattedDate;
}

// expects date in YYYY-MM-DD format
export function toDateString(date) {
  const dateString = new Date(date).toDateString();
  return dateString.substring(4);
}

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Nov', 'Dec'];
export const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
export const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
