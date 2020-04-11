var form = document.getElementById("claim-trial");

function validateForm(e) {
  e.preventDefault();
  let fields = document.getElementsByTagName("input");
  console.log(fields);
}

form.addEventListener("submit", validateForm);
