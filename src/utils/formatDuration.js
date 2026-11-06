/**
 * Turns a date range such as "Feb 2023 - Present" into a length like
 * "2 yrs 9 mos". Both ends are counted inclusively (Jan to Jan = 1 mo).
 *
 * Returns an empty string when the range cannot be parsed, so callers can
 * simply skip rendering it.
 */

const MONTH_INDEX = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

/** Hyphen, en dash or em dash can separate the two dates. */
const RANGE_SEPARATOR = /[-–—]/;

/**
 * Parses one side of the range: "Feb 2023", "February 2023" or "Present".
 * @param {string} text
 * @returns {{ year: number, month: number } | null}
 */
const parseMonthYear = (text) => {
  if (text.toLowerCase() === "present") {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  }

  const match = text.match(/([a-zA-Z]+)\s+(\d{4})/);
  if (!match) return null;

  const month = MONTH_INDEX[match[1].toLowerCase().slice(0, 3)] ?? 0;
  return { year: Number(match[2]), month };
};

const plural = (count, unit) => `${count} ${unit}${count > 1 ? "s" : ""}`;

/**
 * @param {string} range e.g. "Mar 2022 - Jan 2023"
 * @returns {string} e.g. "11 mos", or "" if unparseable
 */
export function formatDuration(range) {
  const parts = range.split(RANGE_SEPARATOR).map((part) => part.trim());
  if (parts.length !== 2) return "";

  const start = parseMonthYear(parts[0]);
  const end = parseMonthYear(parts[1]);
  if (!start || !end) return "";

  const totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (totalMonths <= 0) return "";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return [years > 0 && plural(years, "yr"), months > 0 && plural(months, "mo")]
    .filter(Boolean)
    .join(" ");
}
