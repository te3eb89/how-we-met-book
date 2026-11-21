const pages = [
    "images/frontcover.png",

    "images/story3.png",
    "images/story2.png",
    "images/story1.png",

    "images/story4.png",
    "images/story5.png",
    "images/story6.png",

    "images/story7.png",
    "images/story8.png",
    "images/story9.png",

    "images/backcover.png"
];

let currentPage = 0;

const image = document.getElementById("storyImage");
const pageNumber = document.getElementById("pageNumber");

function updatePage() {

    image.src = pages[currentPage];

    if(currentPage === 0){
        pageNumber.textContent = "Front Cover";
    }
    else if(currentPage === pages.length - 1){
        pageNumber.textContent = "Back Cover";
    }
    else{
        pageNumber.textContent =
        "Page " + currentPage + " of 9";
    }
}

document
.getElementById("nextBtn")
.addEventListener("click", () => {

    if(currentPage < pages.length - 1){
        currentPage++;
        updatePage();
    }

});

document
.getElementById("prevBtn")
.addEventListener("click", () => {

    if(currentPage > 0){
        currentPage--;
        updatePage();
    }

});

updatePage();
