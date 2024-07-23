const form = document.getElementsByTagName("form")[0];

const showUser = () => {
  const displayUser = document.getElementById("user-display");
  displayUser.classList.add("opacity-0");

  const user = localStorage.getItem("Username");
  if (user) {
    displayUser.classList.add("opacity-100");
    displayUser.innerText = user;
  }
};

form.onsubmit = (ev) => {
  ev.preventDefault();
  const userNameValue = document.getElementById("user-name").value;
  localStorage.setItem("Username", userNameValue);
  showUser();
  form.reset();
};

const deleteBtn = document.getElementById("sign-out");

deleteBtn.onclick = () => {
  localStorage.removeItem("Username");
  const displayUser = document.getElementById("user-display");
  displayUser.classList.remove("opacity-100");

  displayUser.classList.add("opacity-0");
  displayUser.innerText = "Username";
};

let counter = 0;
const notifications = document.getElementById("notifications");

const timePassing = () => {
  const secondsValue = sessionStorage.getItem("Seconds");
  if (secondsValue) {
    counter = secondsValue;
    notifications.innerText = sessionStorage.getItem("Seconds");
  } else {
    sessionStorage.setItem("Seconds", counter);
    notifications.innerText = sessionStorage.getItem("Seconds");
  }
  setInterval(() => {
    counter++;
    sessionStorage.setItem("Seconds", counter);
    notifications.innerText = sessionStorage.getItem("Seconds");
  }, 1000);
};

const startup = () => {
  showUser();
  timePassing();
};

window.addEventListener("DOMContentLoaded", startup);
