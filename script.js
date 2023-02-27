var collapsibles = document.querySelectorAll(".collapse");
var toggleBtn = document.getElementById("toggle-collapse");
var cards = document.querySelectorAll(".card");
var cardsHeader = document.querySelectorAll(".card-header");

toggleBtn.addEventListener("click", function () {
    collapsibles.forEach(function (collapse) {
        if (toggleBtn.querySelector(".text-show-hide").textContent === "Show" && !collapse.classList.contains("show")) {
            collapse.classList.add("show");
            var card = collapse.closest(".card");
            if (!card.classList.contains("active")) {
                card.classList.add("active");
                card.querySelector(".rotate-0").classList.add("rotate-180");
                toggleBtn.querySelector(".rotate-0").classList.add("rotate-180");
                card.querySelector(".text-show-hide").textContent = "Hide";
            }
        } else if (
            toggleBtn.querySelector(".text-show-hide").textContent === "Hide" &&
            collapse.classList.contains("show")
        ) {
            collapse.classList.remove("show");
            var card = collapse.closest(".card");
            if (card.classList.contains("active")) {
                card.classList.remove("active");
                card.querySelector(".rotate-0").classList.remove("rotate-180");
                toggleBtn.querySelector(".rotate-0").classList.remove("rotate-180");
                card.querySelector(".text-show-hide").textContent = "Show";
            }
        }
    });
    toggleBtn.querySelector(".text-show-hide").textContent =
        toggleBtn.querySelector(".text-show-hide").textContent === "Show" ? "Hide" : "Show";
});

// Ajouter un événement clic pour chaque carte
cardsHeader.forEach(function (cardHeader) {
    cardHeader.addEventListener("click", function (event) {
        var collapse = event.target.closest(".card").querySelector(".collapse");
        var card = event.target.closest(".card");
        if (collapse.classList.contains("show")) {
            var image = card.querySelector(".rotate-0");
            if (image) {
                image.classList.remove("rotate-180");
            }
            card.classList.remove("active");
            card.querySelector(".text-show-hide").textContent = "Show";
        } else {
            var image = card.querySelector(".rotate-0");
            if (image) {
                image.classList.add("rotate-180");
            }
            card.classList.add("active");
            card.querySelector(".text-show-hide").textContent = "Hide";
        }
    });
});
