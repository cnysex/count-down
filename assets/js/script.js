$(function () {
  var note = $("#note"),
    ts = new Date(2021, 10, 2),
    isNow = true;

  if (new Date() > ts) {
    // The new year is here! Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;
    isNow = false;
  }

  $("#countdown").countdown({
    timestamp: ts,
    callback: function (days, hours, minutes, seconds) {
      var message = "";

      message += days + "天";
      message += hours + "小时";
      message += minutes + "分钟";
      message += seconds + "秒" + " <br />";

      if (isNow) {
        message += "时间到了";
      } else {
        message += "留给你的时间不多了";
      }

      note.html(message);
    },
  });
});
