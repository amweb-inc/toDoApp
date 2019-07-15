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
      "<li class='userItem'>" + addInput + "</li>"
    );
    //sets
    $(".list").append(listHTML);
  }
});

// ** Removes li items on doubleclick
$(document).on("dblclick", "li", function() {
  $(this).fadeOut("slow");
});

// $("#mainList li").each(function remove() {
//   if ($("#mainList").length <= 0) {
//     console.log("nothing to remove");
//   } else {
//     $(".removeItem").click(function() {
//       $("#mainList li")
//         .first()
//         .fadeOut();
//     });
//   }

//   //   $(listItem).fadeOut();
// });
