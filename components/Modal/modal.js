const modalOpen = document.getElementById("modal-open");
const modalContainer = document.getElementById("modal-container");
const modalBlur = document.getElementById("modal-blur");
const modalDismiss = document.getElementById("modal-dismiss");

modalOpen.addEventListener("click",() => {
    modalContainer.classList.remove("modal-hidden")
})

modalDismiss.addEventListener("click",() => {
    modalContainer.classList.add("modal-hidden")
})

modalBlur.addEventListener("click",() => {
    modalContainer.classList.add("modal-hidden")
})




