const sideNav = document.getElementById("side-nav")
const sideNavToggle = document.getElementById("sidenav-toggle")
const sideNavToggleIcon = document.querySelector(".sidenav-toggle i")
const sideNavOverlay = document.getElementById("sidenav-overlay")


sideNavToggle.addEventListener("click",() => {
    sideNav.classList.toggle("sidenav-show");
    sideNavOverlay.classList.toggle("show");
    sideNavToggleIcon.classList.toggle("fa-times")
})

sideNavOverlay.addEventListener("click",() => {
    sideNav.classList.toggle("sidenav-show");
    sideNavOverlay.classList.toggle("show");
    sideNavToggleIcon.classList.toggle("fa-times")
})