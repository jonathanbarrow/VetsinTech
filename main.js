function select() {
    const menuToggle = document.querySelector('.toggle')
    const showcase = document.querySelector('.showcase')

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active')
        showcase.classList.toggle('active')
    })
}


function Shuffle() {
    const videos = ["rudy.mp4", "uncut_gems.mp4", "moneyball.mp4"];

    var randomItem = videos[Math.floor(Math.random()*videos.length)];

    return randomItem;
}

function randomMovie() {
    var videoElement = document.querySelector('#videoContainer');

    videoElement.innerHTML = "<video src=" + Shuffle() + " muted loop autoplay></video>"
}