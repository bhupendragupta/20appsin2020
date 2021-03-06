const form = document.getElementById("form");
const username = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input,min,max){

    if(input.value.length < min){
        showError(input ,`${input.id} is more than ${min}`)
    }
    else if(input.value.length>max){
        showError(input ,`${input.id} must not be more than ${max}`)
    }
    else {showSuccess(input)}
}


function checkPasswords(password,password2){
    if(password.value !== password2.value){
        showError(password2, `Passwords do not match`)
    }else {
        showSuccess(password2)
    }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username,3,15)
  checkLength(password,6,25)
  checkPasswords(password,password2)
});


