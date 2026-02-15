import dayjs from "dayjs";

export class TimestampToMonthYear {
  ts: string;

  public constructor(ts: string) {
    this.ts = ts;
  }

  public format() {
    return dayjs(this.ts).format("MMMM YYYY");
  }
}
