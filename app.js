window.addEventListener("keydown", (e) => {
    // console.log(e.keyCode);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`) || null;
    // key.forEach(child => {
    //     if(child == "audio")
    //     console.log({ "audio": child});
    //     else
    //     console.log({"garbage": child});
    // });
    // console.log(key);
    const audio = key?.children[2] || 0;
    if( !audio ) return;
    // console.log({"audio": audio});

    /* setInterval(() => {
        key.classList.remove("playing");
    }, 1000);
    */

    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
    key.addEventListener("transitionend", (e) => {
        if(e.propertyName !== "transform") return
        key.classList.remove("playing")
    })

    

    // console.log(audio);
});


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/pwa.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }