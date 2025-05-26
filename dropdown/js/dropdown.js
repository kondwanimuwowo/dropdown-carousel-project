const dropdownBtn = document.querySelectorAll(".dropdown-toggle");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dropdownMenu = btn.nextElementSibling;
    const isHidden = dropdownMenu.classList.contains("hidden");
    hideMenus();

    if (isHidden && dropdownMenu.classList.contains("dropdown-menu")) {
      dropdownMenu.classList.remove("hidden");
    }
  });
});

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".dropdown-toggle") &&
    !e.target.closest(".dropdown-menu")
  ) {
    hideMenus();
  }
});

function hideMenus() {
  dropdownMenus.forEach((menu) => {
    menu.classList.add("hidden");
  });
}
