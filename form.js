let div1 = document.getElementById("div1");
function callerror1() {
  let error1 = document.createElement("p");
  error1.style.color = "red";
  error1.textContent = "Please fill in the username";
  div1.appendChild(error1);
}

let div2 = document.getElementById("div2");
function callerror2() {
  let error2 = document.createElement("p");
  error2.style.color = "red";
  error2.textContent = "Please fill in your email address correctly";
  div2.appendChild(error2);
}

const emailFormat =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

let div3 = document.getElementById("div3");
function callerror3() {
  let error3 = document.createElement("p");
  error3.style.color = "red";
  error3.textContent = "Please fill in your date of birth";
  div3.appendChild(error3);
}

let div4 = document.getElementById("div4");
function callerror4() {
  let error4 = document.createElement("p");
  error4.style.color = "red";
  error4.textContent = "Please fill in your telephone number";
  div4.appendChild(error4);
}

function redirectToWelcomePage(){
  window.location.href="welcome.html"
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("first").value;
  let email = document.getElementsByClassName("email").value;
  let dob = document.getElementsByClassName("DOB").value;
  let tel = document.getElementsByClassName("telCo").value;
  if (name === "") {
    callerror1();
    return;
  } else if (email === "" && !email.match(emailFormat)) {
    callerror2();
    return false;
  } else if (dob === "") {
    callerror3();
    return;
  } else if (tel === "") {
    callerror4();
    return;
  } else {
    alert("yuve been registerd successfully");
    document.getElementById("first").value ="";
    document.getElementsByClassName("email").value ="";
    document.getElementsByClassName("DOB").value ="";
    document.getElementsByClassName("telCo").value ="";
    redirectToWelcomePage()
  }
});
