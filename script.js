// accordion

const accordion = document.querySelectorAll(".accordion-item");

const accordionVisibleClass = "accordion-active";

console.log(accordion);

const accordionHandleClick = (e) => {
  console.log(e.target);

  const alreadyHasActive = e.target.parentNode.classList.contains(
    accordionVisibleClass
  );
  if (alreadyHasActive) {
    e.target.parentNode.classList.remove(accordionVisibleClass);
  } else {
    accordion.forEach((acc) => {
      acc.classList.remove(accordionVisibleClass);
    });

    e.target.parentNode.classList.add(accordionVisibleClass);
  }
};

accordion.forEach((accItem) => {
  accItem.addEventListener("click", accordionHandleClick);
});

// THE PLAN

// THE PLAN
const plan_steps = [
  {
    idx: 1,
    title: "Idealização",
    description:
      "Se você não sabe para onde vai qualquer caminho serve. E você não quer chegar a um destino que lhe traga prejuízos. Você terá de uma vez por todas a direção certa no mercado, o caminho da consistência de lucros e prosperidade.",
  },
  {
    idx: 2,
    title: "Planejamento e estratégia",
    description:
      "Se você falha em planejar, está planejando falhar. Há somente dois tipos de traders no mercado financeiro: os que fazem um bom planejamento e os que perdem dinheiro. Se você não tem um plano, você não tem como executar algo que realmente lhe traga resultados. O ST6 te orienta a fazer um planejamento de elite para Day Trade.",
  },
  {
    idx: 3,
    title: "Controle de Capital",
    description: "Você vai descobrir como gerenciar o risco do jeito certo.",
  },
  {
    idx: 4,
    title: "Mindset",
    description: "Você estará alinhado ao mindset de um Trader 6.",
  },
  {
    idx: 5,
    title: "Análise Estatística",
    description:
      "Para saber exatamente o que funciona para você, enxergar seus pontos fortes e fracos e assim evoluir rapidamente, é imprescindível fazer uma análise estatística. O ST6 é rigoroso neste ponto.",
  },
  {
    idx: 6,
    title: "Progresso",
    description:
      "Você vai progredir quando descobrir como usar a estatística ao seu favor. E quanto mais você progride mais você absorve conhecimento de mercado. Aqui você pode começar aumentar os lotes e ter resultados sustentáveis.",
  },
];

const tabContainer = document.querySelector("#tabs");
const tabContentContainer = document.querySelector("#tab-content");

const NumberRefStep = document.querySelector("#number-reference-step");
const TitlerRefStep = document.querySelector("#title-reference-step");
const TextRefStep = document.querySelector("#text-reference-step");

let tabActiveIdx = 1;

const handleTabToggle = (e) => {
  const selectedIdx = parseInt(
    e.target.closest("button").getAttribute("data-idx"),
    10
  );

  // Remove active class from all tabs
  document.querySelectorAll("#tabs button").forEach((tab) => {
    tab.children[0].classList.add("bg-opacity-10");
    tab.children[0].classList.remove("bg-BLUE_500");
  });

  // Add active class to the clicked tab
  e.target.closest("button").children[0].classList.add("bg-BLUE_500");
  e.target.closest("button").children[0].classList.remove("bg-opacity-10");

  // Update the active tab index
  tabActiveIdx = selectedIdx;

  const step = plan_steps.find((step) => step.idx === selectedIdx); // Find the corresponding step
  console.log(step);
  if (step) {
    // Update the tab content
    NumberRefStep.innerHTML = `${step.idx}.`;
    TitlerRefStep.innerHTML = `${step.title}.`;
    TextRefStep.innerHTML = `${step.description}.`;
    /* tabContentContainer.innerHTML = `
      <span class="font-proximaNova font-semibold text-head40 text-BLUE_500">${step.idx}.</span>
      <h3 class="font-proximaNova font-semibold text-head40 text-white">${step.title}</h3>
      <p class="font-proximaNova font-normal text-head24 text-white">${step.description}</p>
    `; */
  }
};

plan_steps.forEach((step) => {
  const tabButton = document.createElement("button");
  tabButton.setAttribute("id", "tab");
  tabButton.setAttribute("class", "flex items-center gap-4");
  tabButton.setAttribute("data-idx", step.idx); // Set a data attribute for the index

  tabButton.innerHTML = `
  <div class="pointer-events-none h-[40px] w-[40px] rounded-full bg-BLUE_500  transition-all ${
    tabActiveIdx === step.idx ? "" : "bg-opacity-10"
  } grid place-content-center font-proximaNova font-semibold text-body18 text-white">
    ${step.idx}.
  </div>
  <p class="pointer-events-none font-proximaNova font-semibold uppercase text-white text-body18">
    ${step.title}
  </p>
`;

  tabContainer.appendChild(tabButton);
  tabButton.addEventListener("click", handleTabToggle);
});

const header = document.querySelector("#header");
const headerHeight = 124; // Get the height of the header

window.addEventListener("scroll", function () {
  // Check if the page has been scrolled more than the header's height
  if (window.pageYOffset > headerHeight) {
    header.classList.add("header-scrolled"); // Change color when scrolled past header height
  } else {
    header.classList.remove("header-scrolled"); // Reset to original color when not scrolled past header height
  }
});
