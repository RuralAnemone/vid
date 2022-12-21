const v = document.querySelector('video')

if (!!location.hash) v.currentTime = location.hash.substring(1) // basically `if (hash in location)` but I think it threw an error once so I went with this I guess uh

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen
function openFullscreen() {
    if (v.requestFullscreen) {
        v.requestFullscreen();
    } else if (v.webkitRequestFullscreen) { /* Safari */
        v.webkitRequestFullscreen();
    } else if (v.msRequestFullscreen) { /* IE11 */
        v.msRequestFullscreen();
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

function keypress(e) {
    var ev = e || event
    if (ev.keyCode == 70) { // f
        openFullscreen()
    }
    if (ev.keyCode == 74) { // j
        timeChange(-10)
    }
    if (ev.keyCode == 75) { // k
        v.paused ? v.play() : v.pause()
    }
    if (ev.keyCode == 76) { // l
        timeChange(10)
    }
    if (ev.keyCode == 37) { // ←
        timeChange(-5)
    }
    if (ev.keyCode == 39) { // →
        timeChange(5)
    }
    if (ev.keyCode == 38) { // ↑
        vid.volume += 0.1
    }
    if (ev.keyCode == 40) { // ↓
        vid.volume -= 0.1
    }
    if (ev.keyCode == 77) { // m
        vid.muted = !vid.muted
    }
    if (ev.keyCode == 48) { // 0
        timeSet(0)
    }
    if (ev.keyCode == 49) { // 1
        timeSet(0.1)
    }
    if (ev.keyCode == 50) { // 2
        timeSet(0.2)
    }
    if (ev.keyCode == 51) { // 3
        timeSet(0.3)
    }
    if (ev.keyCode == 52) { // 4
        timeSet(0.4)
    }
    if (ev.keyCode == 53) { // 5
        timeSet(0.5)
    }
    if (ev.keyCode == 54) { // 6
        timeSet(0.6)
    }
    if (ev.keyCode == 55) { // 7
        timeSet(0.7)
    }
    if (ev.keyCode == 56) { // 8
        timeSet(0.8)
    }
    if (ev.keyCode == 57) { // 9
        timeSet(0.9)
    }
}

document.body.onkeydown=_=>keypress(_)

setInterval(_ => {
    history.replaceState(undefined, undefined, `#${v.currentTime}`)
}, 5000) // this is in case your browser crashes or something and you need to restore your time, but it's on a 5 second delay because I feel like it. also, it's nicer to have a "bit of a recap" when coming back to something, even if it's just a few seconds