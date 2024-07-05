const constraints = window.constraints = {
    audio: true,
    video: true
};
const btn = document.getElementById('screen');
btn.addEventListener('click', shareScreen);
async function init() {
    try {
        let stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    } catch(e) {
        handleFailure(e);
    }

}
function handleSuccess(stream) {
    let video = document.querySelector('video');
    const tracks = stream.getVideoTracks();
    console.log(tracks);
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
}

function handleFailure(e) {
    console.log(e, 'fails');
}

function shareScreen() {
    
}

init();