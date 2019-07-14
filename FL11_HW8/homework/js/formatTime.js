function formatTime(m){
  let days = 0;
  let hours = 0;
  let minutes = 0;
  
  let remh = m%1440;
  days = (m - remh)/1440;

  minutes = remh%60;
  hours = (remh - minutes)/60;

  let time = days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s) ';
  return time;
}

formatTime(120);
formatTime(59);
formatTime(3601);