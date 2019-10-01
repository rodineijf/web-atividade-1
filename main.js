const btnSaturday = document.getElementById("btnSaturday");
const btnSunday = document.getElementById("btnSunday");

const saturdayContent = document.getElementById("saturdayContent");
const sundayContent = document.getElementById("sundayContent");

btnSaturday.addEventListener("click", () => {
  btnSunday.classList.remove("active");
  btnSaturday.classList.add("active");
  saturdayContent.hidden = false;
  sundayContent.hidden = true;
});

btnSunday.addEventListener("click", () => {
  btnSaturday.classList.remove("active");
  btnSunday.classList.add("active");
  saturdayContent.hidden = true;
  sundayContent.hidden = false;
});

function initMap() {
  const eventLocation = { lat: -30.042314, lng: -51.216163 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: eventLocation,
    zoom: 15
  });
  new google.maps.Marker({
    position: eventLocation,
    map: map
  });
}
