/*toggle(abrindo e fechando o menu quando clicado no coiso de 3 riscos e no x)*/
const nav = document.querySelector("#um nav");
const toop = document.querySelectorAll("nav .toop");
for (const element of toop) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}
/*esconder o menu quando for clicadop em algum linke*/
const links = document.querySelectorAll("nav ul li a");
for (const conjuntos of links) {
  conjuntos.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}
/*coisas  com rolagem e tudo*/
const header = document.querySelector("#um");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});


/*scrollrevel*/
const scrollReveal = scrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal = reveal(
  `#home .texte,
#home .tact,
#about .texte,
#about .tact,
#services header,
#services .card,
#testemunial header,
#testemunial .depoimentos,
#contact .texte,
#contact .links
footer .hishiro, footer .redes
 `,
  { interval: 100 }
);

const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document.querySelector("nav ul li a[href*=" + sectionId + "]");
      classList.add("active");
    } else {
      document.querySelector("nav ul li a[href*=" + sectionId + "]");
      classList.remove("active");
    }
  }
}
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});
