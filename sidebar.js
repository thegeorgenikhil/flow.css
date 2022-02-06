const sideNav = document.getElementById("side-nav")
const sideNavToggle = document.getElementById("sidenav-toggle")
const sideNavOverlay = document.getElementById("sidenav-overlay")


sideNavToggle.addEventListener("click",() => {
    sideNav.classList.toggle("sidenav-show");
    sideNavOverlay.classList.toggle("show")
})