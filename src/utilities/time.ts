import dayjs from "dayjs";

type FormatDateParams = {
  date: Date | string;
  format?: string;
};

export class TimeUtilities {
  static formatDate(params: FormatDateParams) {
    return dayjs(params.date).format(params.format ?? "MM-DD-YYYY");
  }
}
