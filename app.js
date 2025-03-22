console.log("JavaScript is running!");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded!");

  const form = document.querySelector("form");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  console.log("Form found!");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page reload
    console.log("Form submitted!");

    const dropdownValue = document.getElementById("dropdown").value;
    const textInputValue = document.getElementById("text-input").value;

    console.log("Dropdown Value:", dropdownValue);
    console.log("Text Input Value:", textInputValue);
  });
});
