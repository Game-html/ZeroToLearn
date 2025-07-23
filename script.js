const searchInput = document.getElementById("search");
const scriptList = document.getElementById("script-list");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();
  const scripts = scriptList.querySelectorAll(".script");

  scripts.forEach(script => {
    const text = script.textContent.toLowerCase();
    script.style.display = text.includes(keyword) ? "block" : "none";
  });
});
