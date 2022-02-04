const btnCollapse = document.getElementById("btn-collapse");
const collapseGroup = document.getElementById("collapsible-group");

btnCollapse.addEventListener("click",() => {
    const stateOfNav = collapseGroup.style.display || "none";
    collapseGroup.style.display = currentStateOfNav = stateOfNav === "none" ? "block" : "none"
})