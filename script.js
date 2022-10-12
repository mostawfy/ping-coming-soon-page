const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValue = form["email"].value;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(formValue);
  if (!re.test(String(formValue).toLowerCase())) {
    form.classList.add("error");
  } else if (!formValue) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});
