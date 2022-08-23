const container = document.querySelector(".event-container");

window.addEventListener("keydown", (e) => {
  const element = `
      <div class="box"> ${e.code} </div>
      <div class="box"> ${e.key === " " ? "Space" : e.key} </div>
      <div class="box"> ${e.keyCode} </div>
      `;

  container.innerHTML = element;
});
