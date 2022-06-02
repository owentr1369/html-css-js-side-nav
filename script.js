let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".search-icon");
let linkName = document.querySelector(".links_name");
btn.onclick = function () {
  sidebar.classList.toggle("active");
  linkName.classList.toggle("active");
};
searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
};
