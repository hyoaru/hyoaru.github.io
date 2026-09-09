import dayjs from "dayjs";

export class TimestampToMonthYear {
  ts: string | Date;

  public constructor(ts: string | Date) {
    this.ts = ts;
  }

  public format() {
    return dayjs(this.ts).format("MMMM YYYY");
  }
}
