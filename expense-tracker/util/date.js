export function getFormattedDate(date) {
  return `${date.getDate()} - ${date
    .toLocaleString("default", {
      month: "long",
    })
    .substring(0, 3)
    .toUpperCase()} - ${date.getFullYear()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
