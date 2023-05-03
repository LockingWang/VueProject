export function currency(num) {
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

export function date(time) {
  const localDate = new Date(time);
  return localDate.toLocaleDateString();
}

export function inputDateType(time) {
  const unixTime = new Date(time * 1000);
  const year = unixTime.getFullYear();
  let month = unixTime.getMonth() + 1;
  let day = unixTime.getDate();

  if (day < 10) {
    day = 0 + day.toString();
  }
  if (month < 10) {
    month = 0 + month.toString();
  }
  const newDateType = `${year}-${month}-${day}`;
  return newDateType;
}
