$(document).ready(function () {
  function applyClassPastPresentFuture() {
    let currentHour = currentTime.getHours();
    for (let i = 9; i <= 17; i++) {
      if (i < currentHour) {
        $("#hour-" + i).addClass("past");
      } else if (i === currentHour) {
        $("#hour-" + i).addClass("present");
      } else {
        $("#hour-" + i).addClass("future");
      }
    }
  }

  function getFromLocalStorage() {
    for (let i = 9; i <= 17; i++) {
      let storageValue = localStorage.getItem("hour-" + i);
      if (storageValue) {
        $("#hour-" + i)
          .find("textarea")
          .val(storageValue);
      }
    }
  }

  $(".saveBtn").on("click", function () {
    let storageValue = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, storageValue);
  });

  function displayCurrentDate() {
    $("#currentDay").text(currentTime.toDateString());
  }

  let currentTime = new Date();

  // Call the functions
  applyClassPastPresentFuture();
  getFromLocalStorage();
  displayCurrentDate();
});
