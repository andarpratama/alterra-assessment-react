export const dateFormater = date => {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var parts = date.split('-');
  var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
  let day = mydate.getDate();
  // get month from 0 to 11
  let month = mydate.getMonth();
  // conver month digit to month name
  month = months[month];
  let year = mydate.getFullYear();

  // show date in two digits
  if (day < 10) {
    day = '0' + day;
  }

  // now we have day, month and year
  // arrange them in the format we want
  return month + ' ' + day + ', ' + year;
};
