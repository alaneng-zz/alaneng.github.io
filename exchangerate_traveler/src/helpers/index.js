import Moment from "moment";
import { extendMoment } from "moment-range";

export const getDateRange = dateRange => {
  const moment = extendMoment(Moment);

  const startAndEnd = [
    moment(dateRange[0], "YYYY-MM-DD"),
    moment(dateRange[1], "YYYY-MM-DD")
  ];
  const range = moment.range(startAndEnd);
  const datesList = Array.from(range.by("day"));

  return datesList.map(date => {
    return date.format("YYYY-MM-DD");
  });
};
