import { format } from "date-fns";

export function formatDate(dateString) {
  const date = new Date(dateString);
  if (date.toString() !== "Invalid Date") {
    return format(date, "ppp");
  }
  return "Invalid Date";
}
