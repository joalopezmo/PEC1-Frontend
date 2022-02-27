const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById('email');
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const age = document.getElementById('age');
const url = document.getElementById('url');

//error messages

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// success messages

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control sucess";
}

//check email is valid

function checkEmail(input) {
  const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(re.test(input.value.trim())){
    showSuccess(input);
  }else{
    showError(input, 'Email is not valid');
  }; //modificado
}

//checkRequired

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check password match

function checkPasswordMatch(input1, input2){

    if(input1.value !== input2.value){
        showError(input2, 'Password do not match');
    }

}

//check age

function checkAge(input){
    if(input.value <= 0){
        showError(input, 'The age is not valid');
    }else if(input.value >= 999){
        showError(input, 'The age is not valid');
    }

}

//check url

function checkUrl(input){

    const re = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*');// port and path
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, 'url is not valid');}

}

//Event listener

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2, age, url]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
  checkAge(age);
  checkUrl(url);
   
});
