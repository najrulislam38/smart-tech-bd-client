function handleToggle() {
  const darkLightMode = document.getElementById("darkLightMode");
  darkLightMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}

export default handleToggle;
