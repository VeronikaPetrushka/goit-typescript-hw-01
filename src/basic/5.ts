enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: any) => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
