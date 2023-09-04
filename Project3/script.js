// Get DOM Elements for JS Code
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress= document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Create function for clicking on video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

// Create function for updating the play / pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa-solid fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa-solid fa-pause fa-2x"></i>'
    }
};


// Create function to update the progress
function updateProgress() {
    return true;
}

// Create function to stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Create function to update the video Progress using the slider
function setVideoProgress() {
    return true;
}


// Event Listeners
// 1. Event Listeners for the video player
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

// 2. Event Listeners for Play Button
play.addEventListener('click',toggleVideoStatus);

// 3. Event Listeners for stop Button
stop.addEventListener('click',stopVideo);

// 4. Event Listeners for Progress bar (Progress Bar is a Range input)
progress.addEventListener('change', setVideoProgress);










