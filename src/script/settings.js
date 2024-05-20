// settings menu
const settingsDialog = document.querySelector("#settingsDialog");
const confirmDialog = document.querySelector("#confirmDialog");
const openButton = document.querySelector("#openSettings");
const closeButton = document.querySelector("#closeSettings");
const applyButton = document.querySelector("#applySettings");
const toggleButton = document.querySelector("#toggleMode");
const confirmYesButton = document.querySelector("#confirmYes");
const confirmNoButton = document.querySelector("#confirmNo");

let isDirty = false;
let tempSettings = {
  isDarkMode: true
};

if (localStorage.getItem("settings")) {
  tempSettings = JSON.parse(localStorage.getItem("settings"));
  applySettings(tempSettings);
}

openButton.addEventListener("click", function () {
  this.setAttribute("aria-pressed", "true");
  settingsDialog.showModal();
});

closeButton.addEventListener("click", function () {
  if (isDirty) {
    confirmDialog.showModal();
  } else {
    settingsDialog.close();
    openButton.setAttribute("aria-pressed", "false");
  }
});

applyButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("settings", JSON.stringify(tempSettings));
  applySettings(tempSettings);
  isDirty = false;
  settingsDialog.close();
  openButton.setAttribute("aria-pressed", "false");
});

toggleButton.addEventListener("click", function () {
  tempSettings.isDarkMode = !tempSettings.isDarkMode;
  isDirty = true;
});

confirmYesButton.addEventListener("click", function () {
  confirmDialog.close();
  settingsDialog.close();
  openButton.setAttribute("aria-pressed", "false");
});

confirmNoButton.addEventListener("click", function () {
  confirmDialog.close();
});

window.addEventListener("click", function (event) {
  if (event.target === settingsDialog) {
    if (isDirty) {
      confirmDialog.showModal();
    } else {
      settingsDialog.close();
      openButton.setAttribute("aria-pressed", "false");
    }
  }
});

// darkmode check
function applySettings(settings) {
  document.documentElement.style.setProperty(
    "--background",
    settings.isDarkMode ? "0 0% 6%" : "0 0% 23%"
  );
}