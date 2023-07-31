// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var saveBtnEl = $('.saveBtn');


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  saveBtnEl.on('click', function () {

    var calendarInfo = $(this).siblings('textarea').val(); /* makes the value the textarea of the hour */
    var hourTime = $(this).parent().attr("id"); /* makes the key the id of the hour */
    localStorage.setItem(hourTime, calendarInfo); /* add to storage */
  });


  // TODO: Add code to apply the past, present, or future class to each time

  function time() {
    let currentHour = dayjs().hour();
    let timeBlock = $('.time-block');

    timeBlock.each(function (i, row) {

      let saidHour = parseInt($(this).attr("id")); /* make saidHour equal to the id. instead of splitting hour off of the id I just made the id the integer alone */

      if (saidHour < currentHour) { /*if id time is equal to current time  = red*/
        $(this).addClass("past");
      } else if (saidHour === currentHour) { /*if id time is before current time  = gray*/
        $(this).addClass("present");
      } else if (saidHour > currentHour) /*if id time is after current time  = green*/ {
        $(this).addClass("future");
      }
    });
  };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  let hour9 = $("#9");
  let hour10 = $("#10");
  let hour11 = $("#11");
  let hour12 = $("#12");
  let hour13 = $("#13");
  let hour14 = $("#14");
  let hour15 = $("#15");
  let hour16 = $("#16");
  let hour17 = $("#17");
  // take local storage and set it to the value of the text area associated with the specific id
  hour9.children('textarea').val(localStorage.getItem("9"));
  hour10.children('textarea').val(localStorage.getItem("10"));
  hour11.children('textarea').val(localStorage.getItem("11"));
  hour12.children('textarea').val(localStorage.getItem("12"));
  hour13.children('textarea').val(localStorage.getItem("13"));
  hour14.children('textarea').val(localStorage.getItem("14"));
  hour15.children('textarea').val(localStorage.getItem("15"));
  hour16.children('textarea').val(localStorage.getItem("16"));
  hour17.children('textarea').val(localStorage.getItem("17"));
  
  // TODO: Add code to display the current date in the header of the page.
  function displayDate() {

    var currentDate = dayjs().format('dddd, MMMM D[th]');
    $('#currentDay').text(currentDate);
  };

  displayDate();
  time();

});
