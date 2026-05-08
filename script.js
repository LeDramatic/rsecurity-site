<<<<<<< HEAD
const API_BASE_URL = "https://rsecurity-backend.onrender.com";

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
fetch(`${API_BASE_URL}/api/visit`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    page: window.location.pathname
  })
});
=======
const API_BASE_URL = "https://rsecurity-backend.onrender.com";

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
>>>>>>> fff7b7be55273fe5c6dca200e924846e36a8f6af
