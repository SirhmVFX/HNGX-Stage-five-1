document.addEventListener("DOMContentLoaded", () => {
  // selectors
  const startRecording = document.getElementById("record");
  const stopRecording = document.getElementById("stoprecord");

  startRecording.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error");
          }
        }
      );
    });
  });

  stopRecording.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stoprecord" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error 2");
          }
        }
      );
    });
  });
});
