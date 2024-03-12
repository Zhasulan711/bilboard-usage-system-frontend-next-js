export type CalendarList = {
  title: number;
  colorClass: string;
};

const colorClasses = [
  "midnightCircle",
  "denimCircle",
  "cobaltCircle",
  "blueCircle",
  "oceanCircle",
];

export const CALENDAR_LIST: CalendarList[] = Array.from(
  { length: 35 },
  (_, index) => {
    const title = ((index + 28) % 31) + 1;
    return {
      title,
      colorClass: colorClasses[Math.floor(Math.random() * colorClasses.length)],
    };
  }
);
