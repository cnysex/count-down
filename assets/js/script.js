$(function () {
  var note = $("#note"),
    ts = new Date(2021, 10, 2),
    isNow = false;

  if (new Date() > ts) {
    isNow = true;
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
