var recorder = null;
var recordedChunks = [];

// Create the modal HTML
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

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.ondataavailable = function (event) {
    recordedChunks.push(event.data);
  };

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });

    // Combine recorded chunks into a Blob
    var recordedBlob = new Blob(recordedChunks, { type: "video/webm" });

    // Upload the recorded video to the API endpoint
    uploadVideoToAPI(recordedBlob);
  };
}

function uploadVideoToAPI(videoBlob) {
  // Create a FormData object to send the video Blob
  var formData = new FormData();
  formData.append("video", videoBlob);

  // Replace 'your-api-endpoint' with the actual API endpoint
  var apiUrl = "https://stage5.onrender.com/api/upload_video_chunk";

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then(function (response) {
      if (response.ok) {
        return response.text(); // Assuming the API returns a URL to the uploaded video
      } else {
        console.error("Failed to upload video to the API.");
        throw new Error("Failed to upload video to the API");
      }
    })
    .then(function (videoUrl) {
      // Upload successful, open the video URL in a new tab
      window.open(videoUrl, "_blank");
    })
    .catch(function (error) {
      console.error("Network error:", error);
    });
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "request_recording") {
    console.log("Requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999999,
          height: 9999999999,
        },
      })
      .then(function (stream) {
        onAccessApproved(stream);
        startRecording();
      });
  }

  if (message.action === "stopRecording") {
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("No recorder");

    recorder.stop();
    stopRecording();
  }
});
