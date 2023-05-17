var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector(".navbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos === 0) {
    // 在最上方時隱藏導覽列
    navbar.style.top = "-90px";
  } else {
    // 在其他位置顯示導覽列
    navbar.style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}