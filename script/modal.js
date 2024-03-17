const $ = document;
const html = document.documentElement;
$.addEventListener("DOMContentLoaded", () => {
  const modal = $.querySelector("#modal");
  const connexion = $.querySelector(".connexion");
  const croix = $.querySelector("#cross");

  connexion.addEventListener("click", (e) => {
    modal.classList.remove("hidden");
    html.classList.add("modal-open");
  });

  croix.addEventListener("click", (e) => {
    modal.classList.add("hidden");
    html.classList.remove("modal-open");
  });

  modal.addEventListener("scroll", (e) => {
    e.stopPropagation();
  });
  $.querySelector("#contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };
    console.log(data);
    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response.data.status);

    if (response.data.status === 200) {
      $.getElementById("succes").classList.toggle("hidden");
    }
  });
});
