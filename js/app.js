// *toggles container
$("#toggleList").click(function() {
  $(".container").toggle();
});

// *Get user input to change title
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

// ** Target ul and set new li

$(".addItemButton").click(function() {
  var addInput = $(".addItemInput").val();
  //if input blank
  if (addInput.length == 0) {
    alert("input was empty");
  } else {
    // li html var
    let listHTML = $(".list ul").append(
      "<li>" + addInput + "<button>" + "Remove" + "</button>" + "</li>"
    );
    //sets
    $(".list").append(listHTML);
  }
});

// ** Removes li items
