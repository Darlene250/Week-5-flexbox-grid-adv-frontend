// User menu

const userButton = document.getElementById("userButton");
const userDropdown = document.getElementById("userDropdown");

userButton.addEventListener("click", function () {
    userDropdown.classList.toggle("show");
});


// Left sidebar

const sidebarButton = document.getElementById("sidebarButton");
const leftSidebar = document.getElementById("leftSidebar");

sidebarButton.addEventListener("click", function () {

    leftSidebar.classList.toggle("collapsed");

    if (leftSidebar.classList.contains("collapsed")) {
        sidebarButton.textContent = "→";
    } else {
        sidebarButton.textContent = "←";
    }

});


// Right sidebar

const rightSidebarButton =
    document.getElementById("rightSidebarButton");

const rightSidebar =
    document.getElementById("rightSidebar");

rightSidebarButton.addEventListener("click", function () {

    rightSidebar.classList.toggle("collapsed");

    if (rightSidebar.classList.contains("collapsed")) {
        rightSidebarButton.textContent = "←";
    } else {
        rightSidebarButton.textContent = "→";
    }

});