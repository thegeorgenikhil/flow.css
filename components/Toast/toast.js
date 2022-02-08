const toast = document.getElementById("toast");
const toastBtn = document.getElementById("toast-btn");
const toastDismiss = document.getElementById("toast-dismiss");

toastBtn.addEventListener("click", () => {
  toast.classList.add("toast-show");
  setTimeout(() => {
    toast.classList.remove("toast-show");
  },5000);
});

toastDismiss.addEventListener("click", () => {
  toast.classList.remove("toast-show");
});
