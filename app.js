const reset = document.querySelector("#reset");

function resetPage() {
  console.log("hi");
  location.reload();
}

reset.addEventListener("click", resetPage);
