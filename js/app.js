// !toggles container
$("#toggleList").click(function() {
  $(".container").toggle();
});
// !Get user input to change title
$("#changeDesc").click(function() {
  // get
  let userTitle = $(".descriptionInput").val();

  // if user leaves input blank then alert to enter title.
  if (userTitle.length == 0) {
    alert("Please enter a Title");
  } else {
    //set
    $(".descriptionHeader").text(userTitle);
  }
});
