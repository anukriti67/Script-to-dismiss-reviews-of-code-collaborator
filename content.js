
  var elements = document.getElementsByTagName("a");
  var found = [];
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML === "Dismiss") {
      elements[i].click();
    }
  }
