import dayjs from "dayjs";

export class Datetime {
  static format(date: Date | string, format: string = "MM-DD-YYYY") {
    return dayjs(date).format(format);
  }

  static extractMonthYear(date: string) {
    const parsedDate = dayjs(date, "YYYY-MM");

    if (!parsedDate.isValid())
      throw new Error("Invalid month-year format, expected YYYY-MM");

    return parsedDate.format("MMMM YYYY"); // e.g. January 2025
  }
}
