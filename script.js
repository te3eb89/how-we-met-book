const pages = [
    "images/cover-front.png",

    "images/page-01.png",
    "images/page-02.png",
    "images/page-03.png",
    "images/page-04.png",
    "images/page-05.png",
    "images/page-06.png",
    "images/page-07.png",
    "images/page-08.png",
    "images/page-09.png",

    "images/cover-back.png"
];

let currentPage = 0;

const image = document.getElementById("storyImage");
const pageNumber = document.getElementById("pageNumber");

function updatePage() {
    image.src = pages[currentPage];

    if (currentPage === 0) {
        pageNumber.textContent = "Front Cover";
    } else if (currentPage === pages.length - 1) {
        pageNumber.textContent = "Back Cover";
    } else {
        pageNumber.textContent = `Page ${currentPage} of 9`;
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

document.getElementById("nextBtn")
    .addEventListener("click", nextPage);

document.getElementById("prevBtn")
    .addEventListener("click", prevPage);

// Swipe support for phones

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;

    if (touchEndX < touchStartX - 50) {
        nextPage();
    }

    if (touchEndX > touchStartX + 50) {
        prevPage();
    }
});

updatePage();
