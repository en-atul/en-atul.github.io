/*
 * Function to calculate the absolute difference in days, months and years between 2 days taking into account variable month lengths and leap years
 * It ignores any time component (ie hours, minutes and seconds)
 *
 */
export function dateDiff(dt1: Date, dt2: Date) {
  /*
   * setup 'empty' return object
   */
  var ret = { days: 0, months: 0, years: 0 };

  /*
   * If the dates are equal, return the 'empty' object
   */
  if (dt1 === dt2) return ret;

  /*
   * ensure dt2 > dt1
   */
  if (dt1 > dt2) {
    var dtmp = dt2;
    dt2 = dt1;
    dt1 = dtmp;
  }

  /*
   * First get the number of full years
   */

  var year1 = dt1.getFullYear();
  var year2 = dt2.getFullYear();

  var month1 = dt1.getMonth();
  var month2 = dt2.getMonth()+1;

  var day1 = dt1.getDate();
  var day2 = dt2.getDate();

  /*
   * Set initial values bearing in mind the months or days may be negative
   */

  ret["years"] = year2 - year1;
  ret["months"] = month2 - month1;
  ret["days"] = day2 - day1;

  /*
   * Now we deal with the negatives
   */

  /*
   * First if the day difference is negative
   * eg dt2 = 13 oct, dt1 = 25 sept
   */
  if (ret["days"] < 0) {
    /*
     * Use temporary dates to get the number of days remaining in the month
     */
    var dtmp1 = new Date(dt1.getFullYear(), dt1.getMonth() + 1, 1, 0, 0, -1);

    var numDays = dtmp1.getDate();

    ret["months"] -= 1;
    ret["days"] += numDays;
  }

  /*
   * Now if the month difference is negative
   */
  if (ret["months"] < 0) {
    ret["months"] += 12;
    ret["years"] -= 1;
  }

  return ret;
}
