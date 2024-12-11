let isOutlineEnabled = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.toggle) {
    isOutlineEnabled = !isOutlineEnabled;
    chrome.storage.sync.get(["outlineColor", "outlineStyle"], function(items) {
      const color = items.outlineColor || '#3A5FCD';
      const style = items.outlineStyle || 'dashed';
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (!tabs || tabs.length === 0) {
          console.error('No active tab found.');
          return;
        }
        const tab = tabs[0];
        if (tab.id != null) {
          try {
            chrome.scripting.insertCSS({
              target: {tabId: tab.id},
              css: isOutlineEnabled ? `* { outline: 1px ${style} ${color}; outline-offset: -1px; }` : '* { outline: none; }'
            });
          } catch (e) {
            console.error('Failed to insert CSS:', e);
          }
        } else {
          console.error('Found a tab without a valid id.');
        }
      });
    });
  }
});
