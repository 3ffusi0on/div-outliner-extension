document.getElementById("toggleButton").addEventListener("click", function () {
  const icon = document.getElementById("powerIcon");
  const isActive = icon.classList.contains("active");

  chrome.runtime.sendMessage({ toggle: !isActive });

  if (isActive) {
    icon.classList.remove("active");
  } else {
    icon.classList.add("active");
  }
});
