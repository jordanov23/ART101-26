let environmentTitle = "The Shoreline";

let environmentElements = ["ocean", "sand", "seashell", "man"];

function prompt();
    let userAsk = prompt("What's your name?");
$("#creature").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
    $("#status").text("The man thinks to himself.");
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("You can't read the thought.");
  }
);
$("#good-button").click(function ()
);