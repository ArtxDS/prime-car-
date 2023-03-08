const btn = document.getElementById("btn_mobile");
const navigation = document.querySelector(".screen");
const imgBtn = document.querySelector(".img_mobile");
btn.addEventListener("click", () => {
  navigation.classList.toggle("active");

  navigation.classList.contains("active")
    ? imgBtn.setAttribute("src", "./assets/menu-icons/close.png")
    : imgBtn.setAttribute("src", "./assets/menu-icons/menus.png");
});
window.addEventListener("resize", () => {
  let large = innerWidth;
  if (large >= 1023) {
    navigation.classList.remove("active");
    imgBtn.setAttribute("src", "./assets/menu-icons/menus.png")
  }
});
