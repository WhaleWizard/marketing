// Контактная форма
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Форма отправлена! Я свяжусь с вами.");
});

// CTA Pop-up
const popup = document.getElementById("ctaPopup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");

openBtn.onclick = () => popup.style.display = "flex";
closeBtn.onclick = () => popup.style.display = "none";
window.onclick = e => { if(e.target==popup) popup.style.display="none"; }

// Параллакс Hero
window.addEventListener("scroll", function(){
  const scrolled = window.scrollY;
  document.querySelector(".hero").style.backgroundPositionY = -(scrolled*0.3)+"px";
});
