var form = document.getElementById("claim-trial");

function validateForm(e) {
  e.preventDefault();
  let fields = Array.from(document.getElementsByTagName("input"));
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  fields.forEach((e) => {
    if (e.value.length <= 6) {
      document.getElementById("error-msg").innerHTML =
        "Fields are Empty (min 6 characters)";
      e.classList.add("invalid");
    } else {
      e.classList.remove("invalid");
    }
  });
  console.log(re.test(String("raihan2gmail.com").toLowerCase()));
}

form.addEventListener("submit", validateForm);
