const v = document.querySelector('video')

if (!!location.hash) v.currentTime = location.hash.substring(1) // basically `if (hash in location)` but I think it threw an error once so I went with this I guess uh

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function timeChange(delta) {
    v.currentTime += delta
    history.replaceState(undefined, undefined, `#${v.currentTime}`)
}

function timeSet(ratio) {
    // + L + bozo + ...
    v.currentTime = v.duration * ratio
}

function keypress(key) {
    if (key.code == 70) { // f
        openFullscreen()
    }
    if (key.code == 74) { // j
        timeChange(-10)
    }
    if (key.code == 75) { // k
        v.paused ? v.play() : v.pause()
    }
    if (key.code == 76) { // l
        timeChange(10)
    }
    if (key.code == 37) { // ←
        timeChange(-5)
    }
    if (key.code == 39) { // →
        timeChange(5)
    }
    if (key.code == 38) { // ↑
        // volume up
    }
    if (key.code == 40) { // ↓
        // volume down
    }
    if (key.code == 77) { // m
        // muted?0:0
    }
    if (key.code == 48) { // 0
        timeSet(0)
    }
    if (key.code == 49) { // 1
        timeSet(0.1)
    }
    if (key.code == 50) { // 2
        timeSet(0.2)
    }
    if (key.code == 51) { // 3
        timeSet(0.3)
    }
    if (key.code == 52) { // 4
        timeSet(0.4)
    }
    if (key.code == 53) { // 5
        timeSet(0.5)
    }
    if (key.code == 54) { // 6
        timeSet(0.6)
    }
    if (key.code == 55) { // 7
        timeSet(0.7)
    }
    if (key.code == 56) { // 8
        timeSet(0.8)
    }
    if (key.code == 57) { // 9
        timeSet(0.9)
    }
}

document.addEventListener('keypress', keypress)

setInterval(_ => {
    history.replaceState(undefined, undefined, `#${v.currentTime}`)
}, 5000)