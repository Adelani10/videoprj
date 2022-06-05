// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const rmvPreload = document.querySelector(".preloader")
let btns = document.querySelector(".btns")
let switchBtn = btns.querySelector(".switch")
let videoCnt = document.querySelector(".video-cnt")


    btns.addEventListener("click", function(){
    if (!switchBtn.classList.contains("swerve")){
        switchBtn.classList.add("swerve")
        videoCnt.pause()
    }
    else{
        switchBtn.classList.remove("swerve")
        videoCnt.play()
    }
})

window.addEventListener("load", function(){
    rmvPreload.classList.add("remove-preload")
})
