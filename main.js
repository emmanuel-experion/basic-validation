function validate() {
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;

  let msg = document.getElementById("msg");

  if (pass == cpass) {
    msg.innerText = "success";
  } else {
    msg.innerText = "failure";
  }
}
