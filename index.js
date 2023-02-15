const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const mediaInput = document.querySelector("#media");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  const media = mediaInput.value;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log(`Media: ${media}`);
});
