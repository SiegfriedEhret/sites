function isValidLocale(locale: string) {
  return ["en"].includes(locale);
}

function add0(time: number) {
  return `0${time}`.slice(-2);
}

export function formatDate(date: string | number | Date, locale = "en") {
  if (!date) return "";

  if (locale === "fr") {
    return new Date(date).toLocaleDateString("fr");
  } else {
    const d = new Date(date);
    return `${d.getFullYear()}-${add0(d.getMonth() + 1)}-${add0(d.getDate())}`;
  }
}

export function formatDateHuman(date: number | string | Date, locale = "en") {
  const d = new Date(date);
  return `${d.getDate()} ${d.toLocaleString(
    isValidLocale(locale) ? locale : "en",
    {
      month: "long",
    }
  )} ${d.getFullYear()}`;
}

export function getYear(date: string | number | Date) {
  const d = new Date(date);
  return d.getFullYear();
}

export function compareDates(a: Date, b: Date) {
  return b.toISOString().localeCompare(a.toISOString());
}
