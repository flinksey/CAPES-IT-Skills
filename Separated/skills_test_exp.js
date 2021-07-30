function validate() {
    let n = document.getElementById("name").value;
    let c = document.getElementById("contactnumber").value;
    let out = document.querySelector("#Output");

    var pM = "You have successfully submitted your contact details.";
    var fM = "Error: Please check all the details before submitting.";

    var nI = document.querySelector("#nameIcon");
    var cI = document.querySelector("#conumIcon");

    if (n != "" && n != " " && c != "" && c != " ") {
      out.textContent = pM;
      nI.className = "fas fa-check-circle";
      cI.className = "fas fa-check-circle";
    } else if ((n == "" || n == " ") && (c != "" && c != " ")) {
      out.textContent = fM;
      nI.className = "fas fa-times-circle";
      cI.className = "fas fa-check-circle";
    } else if ((n != "" && n != " ") && (c == "" || c == " ")) {
      out.textContent = fM;
      nI.className = "fas fa-check-circle";
      cI.className = "fas fa-times-circle";
    } else {
      out.textContent = fM;
      nI.className = "fas fa-times-circle";
      cI.className = "fas fa-times-circle";
    }
}

function changeTheme(choice) {
    let theme = choice.value;
    let space = document.getElementById("form-side");

    var lightTheme = "panel bg-light";
    var darkTheme = "panel bg-dark text-white";

    if (theme == "Light") {
        space.classList = "panel bg-light";
    } else {
        space.classList = "panel bg-dark text-white";
    }
}

// Not used in the current version of the experimentation file.
function showMSG() {
  var msg = document.getElementById("Message");
  if (msg.style.display === "none") {
    msg.style.display = "visible";
  } else {
    msg.style.display = "none";
  }
}
