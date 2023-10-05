// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let currentTime = new Date();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
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
  applyClassPastPresentFuture();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
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
  getFromLocalStorage();

  $(".saveBtn").on("click", function () {
    let storageValue = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, storageValue);
  });

  // TODO: Save button is similar to get FromLocalStorage() - when user clicks on that button, then you find the button, and then find the sibling - when they click on that button, you should be able to tell WHICH time block was clicked ---  then find the textarea ---- then find the value of what is inserted ---- then get user input and store in local storage

  // TODO: Add code to display the current date in the header of the page.
  function displayCurrentDate() {
    $("#currentDay").text(currentTime.toDateString());
  }

  displayCurrentDate();
});
