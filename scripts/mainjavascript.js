// MUSIC
const bgMusic = new Audio("audio/Walz - Major Warren.mp3");

const soundBtn = document.querySelector("#sound-btn");
soundBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    soundBtn.name = "volume-up";
  } else {
    bgMusic.pause();
    soundBtn.name = "volume-mute";
  }
});

// ============== navigation - hide and show =============== //

// When the user scrolls doen = hide, when scroll up = show the navigation.
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

// 'Navbar' REFERENCE: hide and show nav bar from w3schools - https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */

// ======= START SECTION 1 SCROLL TRIGGER ANIMATION (HOME VIDEO) ========= //

gsap.registerPlugin(ScrollTrigger);

const coolVideo = document.querySelector("video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top",
    end: "bottom -20%",
    scrub: 1.6,
    pin: true,
    markers: false,
  },
});

// wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
coolVideo.onloadedmetadata = function () {
  tl.to(coolVideo, { currentTime: coolVideo.duration });
};

// Dealing with devices
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (isTouchDevice()) {
  coolVideo.play();
  coolVideo.pause();
}
// REFERENCE: scroll down to scrub through video (codepen link) https://codepen.io/wisearts/pen/ExZGrbZ and utilises gsap.min library from (scroll trigger plugin) https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger)

// ======= START SECTION 2 Pin and Parallax scrolltrigger animation ========= //

// Pinning text container
ScrollTrigger.create({
  trigger: "#section-2",
  start: "top top",
  end: "bottom 680px",
  pin: "#container",
});

// Parallax effect

gsap.to(".disc", {
  yPercent: 450,
  ease: "none",
  scrollTrigger: {
    trigger: "#section-2",
    start: "top -40px",
    end: "bottom 100px",
    scrub: true,
  },
});

gsap.to(".player", {
  yPercent: -7,
  ease: "none",
  scrollTrigger: {
    trigger: "#section-2",
    start: "top -230px",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".oval", {
  yPercent: -80,
  ease: "none",
  scrollTrigger: {
    trigger: "#section-2",
    start: "top -250px",
    end: "bottom 800px",
    scrub: true,
  },
});

// ======= START SECTION 3 - IMAGE GALLERY ========= //

myItems = [
  '<div class="singleimage"><img src="images/1.jpg" width="1000" alt="front quater shot of turntable"></div>',
  '<div class="singleimage"><img src="images/2.jpg" alt="back shot of turntable"></div>',
  '<div class="singleimage"><img src="images/3.jpg" alt="front quater with vinyl behind in sleeve"></div>',
  '<div class="singleimage"><img src="images/4.jpg" alt="sketches of the turntable design"></div>',
  '<div class="singleimage"><img src="images/5.jpg" alt="closeup buttons on the levi turntable top surface"></div>',
  '<div class="singleimage"><img src="images/6.jpg" alt="side shot levi turntable"></div>',
  '<div class="singleimage"><img src="images/7.jpg" alt="Floating exploded components render"></div>',
  '<div class="singleimage"><img src="images/8.jpg" alt="closeup of player arm housing"></div>',
  '<div class="singleimage"><img src="images/9.jpg" alt="top down image of levi components"></div>',
];

var mySwipe = new SwiperBox({
  items: myItems,
});
// width of the gallery, create div for gallery and append child
mySwipe.HTMLElement.style.width = "auto";
mySwipe.HTMLElement.classList.add("mygal");
document.getElementById("gallery").appendChild(mySwipe.HTMLElement);
