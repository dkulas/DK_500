document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const dropdown = document.getElementById("dropdown");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page refresh

    // Get values from form fields
    const endpointValue = dropdown.value;
    const symbolValue = document.getElementById("text-input").value.trim().toUpperCase(); // Ensure uppercase symbols

    // Validate input
    if (!symbolValue) {
      alert("Please enter a stock symbol!");
      return;
    }

    // Construct API URL based on selected endpoint
    let apiUrl = `https://81g57hmkca.execute-api.us-east-1.amazonaws.com/finnhub?endpoint=${encodeURIComponent(endpointValue)}&symbol=${encodeURIComponent(symbolValue)}`;

    // If the selected endpoint is 'basic-financials', add a metric (e.g., 'all')
    if (endpointValue === "stock/metric") {
      apiUrl += `&metric=all`; // 'all' retrieves comprehensive financial data
    }

    // Log the API URL for debugging
    console.log("Updated API URL:", apiUrl);

    // Fetch data from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data);
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        document.getElementById("output").textContent = `Error: ${error.message}`;
      });
  });
});
