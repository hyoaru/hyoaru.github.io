import dayjs from "dayjs";

export function formatDate(params: { date: Date | string; format?: string }) {
  return dayjs(params.date).format(params.format ?? "MM-DD-YYYY");
}
