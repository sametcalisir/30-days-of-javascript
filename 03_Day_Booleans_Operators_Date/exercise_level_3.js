// Exercise Level 3

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

// i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let dateInfo = new Date();
let year = dateInfo.getFullYear();
let month = String(dateInfo.getMonth() + 1).padStart(2, "0");
let date = String(dateInfo.getDate()).padStart(2, "0");
let hours = String(dateInfo.getHours()).padStart(2, "0");
let minutes = String(dateInfo.getMinutes()).padStart(2, "0");

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
