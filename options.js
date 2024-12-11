document.getElementById('saveOption').addEventListener('click', function() {
  const color = document.getElementById('colorPicker').value;
  const style = document.getElementById('stylePicker').value;
  chrome.storage.sync.set({outlineColor: color, outlineStyle: style}, function() {
    console.log('Options saved:', color, style);
  });
});
