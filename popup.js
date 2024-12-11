document.getElementById('toggleButton').addEventListener('click', function() {
  chrome.runtime.sendMessage({toggle: true});
  const icon = document.getElementById('powerIcon');
  icon.classList.toggle('active');
});
