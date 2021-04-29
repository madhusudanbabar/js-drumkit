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
  if (!audio) return;
  // console.log({"audio": audio});

  /* setInterval(() => {
        key.classList.remove("playing");
    }, 1000);
    */

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    key.classList.remove("playing");
  });

  // console.log(audio);
});

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  deferredPrompt.prompt();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/pwa.js")
      .then((res) => console.log("service worker registered", res))
      .catch((err) => console.log("service worker not registered", err));
  });
}
