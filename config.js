const config = {
  background: "https://images2.imgbox.com/f7/ca/It5Je5RF_o.jpg",
  profile: "https://images2.imgbox.com/c6/f7/GSLgoKd0_o.jpg",
  whatsapp: "https://tapthelink.cfd/yQzJt",
  telegram: "https://tapthelink.cfd/yQzJt",
  minOnline: 700,
  maxOnline: 1100
};

// SET DATA
document.getElementById("bg").style.backgroundImage = `url(${config.background})`;
document.getElementById("profileImg").src = config.profile;
document.getElementById("waLink").href = config.whatsapp;
document.getElementById("tgLink").href = config.telegram;

// ===== MEMBER LIVE SMOOTH =====
let current = 850;

function updateMembers() {
  let change = Math.floor(Math.random() * 10) + 1;

  if (Math.random() > 0.5) current += change;
  else current -= change;

  if (current < config.minOnline) current = config.minOnline;
  if (current > config.maxOnline) current = config.maxOnline;

  let start = parseInt(document.getElementById("memberCount").innerText);
  let end = current;
  let step = (end - start) / 20;
  let i = 0;

  let interval = setInterval(() => {
    start += step;
    document.getElementById("memberCount").innerText = Math.floor(start);
    i++;
    if (i >= 20) clearInterval(interval);
  }, 100);
}

setInterval(updateMembers, 2000);

// ===== BLINK DOT MEMBER =====
setInterval(() => {
  let dot = document.getElementById("blinkDot");
  dot.style.opacity = dot.style.opacity == "0.3" ? "1" : "0.3";
}, 500);

// ===== ONLINE DOT BERDENYUT =====
let onlineDot = document.getElementById("onlineDot");
let scale = 1;
let dir = 1;

function animateDot() {
  scale += dir * 0.01;

  if (scale > 1.2 || scale < 0.9) dir *= -1;

  onlineDot.style.transform = `scale(${scale})`;
  onlineDot.style.boxShadow = `0 0 ${10 * scale}px #00ff66`;

  requestAnimationFrame(animateDot);
}

animateDot();

// ===== ANIMASI TOMBOL CEPAT & SMOOTH =====

// easing
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// WA naik turun
let wa = document.getElementById("waLink");
let waY = 0;
let waTarget = 0;

function animateWA() {
  waY = lerp(waY, waTarget, 0.1);
  wa.style.transform = `translateY(${waY}px)`;
  requestAnimationFrame(animateWA);
}

setInterval(() => {
  waTarget = (Math.random() * 14) - 7;
}, 1200);

// TELE kiri kanan
let tg = document.getElementById("tgLink");
let tgX = 0;
let tgTarget = 0;

function animateTG() {
  tgX = lerp(tgX, tgTarget, 0.1);
  tg.style.transform = `translateX(${tgX}px)`;
  requestAnimationFrame(animateTG);
}

setInterval(() => {
  tgTarget = (Math.random() * 14) - 7;
}, 1200);

// START
animateWA();
animateTG();