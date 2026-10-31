const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const r = parseFloat(radiusInput.value);

  if (isNaN(r) || r < 0) {
    alert("3afak dkhel rayon moujab!");
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

  volumeInput.value = volume.toFixed(2);
});