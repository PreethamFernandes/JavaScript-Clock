function displaytime() {
  const date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let date_t = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let dayDate = date.getDay();
  let day = "";

  if (dayDate == 1) {
    day = "Monday";
  } else if (dayDate == 2) {
    day = "Tuesday";
  } else if (dayDate == 3) {
    day = "Wednesday";
  } else if (dayDate == 4) {
    day = "Thursday";
  } else if (dayDate == 5) {
    day = "Friday";
  } else if (dayDate == 6) {
    day = "Saturday";
  } else {
    day = "Sunday";
  }

  let hour_elem = document.getElementById("hour");
  let min_elem = document.getElementById("min");
  let sec_elem = document.getElementById("sec");
  let date_elem = document.getElementById("date");
  let month_elem = document.getElementById("month");
  let year_elem = document.getElementById("year");
  let day_elem = document.getElementById("day");

  hour_elem.innerHTML = hour;
  min_elem.innerHTML = min;
  sec_elem.innerHTML = sec;
  date_elem.innerHTML = date_t;
  month_elem.innerHTML = month;
  year_elem.innerHTML = year;
  day_elem.innerHTML = day;
}

setInterval(displaytime, 1000);
