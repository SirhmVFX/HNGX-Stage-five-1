const modalHtml = `
  <div id="recording-modal" style="display: none; align-items: center; gap:10px; border-radius: 150px; position: fixed; bottom: 0px; left: 50%; transform: translate(-50%, -50%); background-color: black; padding-block: 1rem; padding-inline:3rem; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
    <h2>00:03:45</h2>
    <p style"color: white;"> | </p>
    <div style="display:flex; flex-direction:column; align-items:center;">
    <button style="background-color: white; border:none; width:44px; height:44px; display:flex; justify-content:center; align-items:center; padding: 3px; border-radius: 32px" id=""><img style="width:18px;" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png" ></button>
    <p style=" color:white">Pause </p>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center;">
    <button id="stopRecordingButton" style="background-color: white; border:none; width:44px; height:44px; display:flex; justify-content:center; align-items:center; padding: 3px; border-radius: 32px" id=""><img style="width:18px;" src="https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/stop-icon-256.png" ></button>
    <p style=" color:white">Stop </p>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center;">
    <button style="background-color: white; border:none; width:44px; height:44px; display:flex; justify-content:center; align-items:center; padding: 3px; border-radius: 32px" id=""><img style="width:18px;" src="https://simpleicon.com/wp-content/uploads/video.png" ></button>
    <p style=" color:white">Camera </p>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center;">
    <button  style="background-color: white; border:none; width:44px; height:44px; display:flex; justify-content:center; align-items:center; padding: 3px; border-radius: 32px" id=""><img style="width:18px;" src="https://cdn-icons-png.flaticon.com/512/25/25682.png" ></button>
    <p style=" color:white">Mic </p>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center;">
    <button style="background-color: grey; border:none; width:44px; height:44px; display:flex; justify-content:center; align-items:center; padding: 3px; border-radius: 32px" id=""><img style="width:18px;" src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png" ></button>
    <p style=" color:white">Delete </p>
    </div>
  </div>
`;

// Function to show the modal
function showRecordingModal() {
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = modalHtml;
  document.body.appendChild(modalContainer);

  const modal = document.getElementById("recording-modal");
  modal.style.display = "flex";

  // Add a click event to the Stop Recording button
  const stopRecordingButton = document.getElementById("stopRecordingButton");
  stopRecordingButton.addEventListener("click", function () {
    stopRecording();
    hideRecordingModal();
  });
}

// Function to hide the modal
function hideRecordingModal() {
  const modal = document.getElementById("recording-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Call showRecordingModal() when starting recording
function startRecording() {
  // Your code to start the recording goes here
  showRecordingModal();
}

// Call hideRecordingModal() when stopping recording
function stopRecording() {
  if (recorder) {
    recorder.stop();
  }
  // Your code to stop the recording goes here
  hideRecordingModal();
}

console.log("Hi, I have been injected whoopie!!!");

var recorder = null;
function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    let url = URL.createObjectURL(recordedBlob);

    let a = document.createElement("a");

    a.style.display = "none";
    a.href = url;
    a.download = "screen-recording.webm";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999999,
          height: 9999999999,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
        startRecording();
      });
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("no recorder");

    recorder.stop();
    startRecording();
    hideRecordingModal();
  }
});
