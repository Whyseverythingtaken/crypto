export default function formatDate(day, month, year) {
  const dateString = `${month} ${day}, ${year}`;
  const date = new Date(dateString);
  date.setDate(date.getDate());

  const formattedDate = date.toISOString().substring(0, 10);
  return formattedDate;
}
