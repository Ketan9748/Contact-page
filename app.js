const btn = document.querySelector(".button");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const general = document.getElementById("general");
const support = document.getElementById("support");
const msg = document.getElementById("Message");
const checkBox = document.getElementById("checkbox");

btn.addEventListener("click", (e) => {
  if (!submit()) {
    e.preventDefault();
  }
});

function submit() {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const msgValue = msg.value.trim();
  let success = true;

  // Validate First Name
  if (fnameValue === "") {
    success = false;
    setError(fname, "This field is required");
  } else {
    setSuccess(fname);
  }

  // Validate Last Name
  if (lnameValue === "") {
    success = false;
    setError(lname, "This field is required");
  } else {
    setSuccess(lname);
  }

  // Validate Email
  if (!validEmail(emailValue)) {
    success = false;
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  //validate option
  // if (support.checked === false && general.checked === false) {
  //   success = falss;
  //   setError("Please select an option");
  // } else {
  //   setSuccess
  // }

  // Validate Message
  if (msgValue === "") {
    success = false;
    setError(msg, "This field is required");
  } else {
    setSuccess(msg);
  }

  // Validate Checkbox (terms and conditions, for example)
  if (!checkBox.checked) {
    success = false;
    setError(checkBox, "You must agree to the terms");
  } else {
    setSuccess(checkBox);
  }
  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

function validEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
