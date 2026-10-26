// Display a message in the browser console
console.log("EV Market Analysis website loaded successfully.");

// Highlight the active navigation link
const navigationLinks = document.querySelectorAll(".navbar nav a");

function updateActiveLink() {
    const currentSection = window.location.hash || "#home";

    navigationLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentSection) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

window.addEventListener("hashchange", updateActiveLink);

updateActiveLink();