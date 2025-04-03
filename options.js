// Load saved settings when options page is opened
document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(
    { outlineColor: "#3A5FCD", outlineStyle: "dashed" },
    function (items) {
      document.getElementById("colorPicker").value = items.outlineColor;
      document.getElementById("stylePicker").value = items.outlineStyle;
    }
  );
});

document.getElementById("saveOption").addEventListener("click", function () {
  const color = document.getElementById("colorPicker").value;
  const style = document.getElementById("stylePicker").value;
  chrome.storage.sync.set(
    { outlineColor: color, outlineStyle: style },
    function () {
      console.log("Options saved:", color, style);
    }
  );
});
