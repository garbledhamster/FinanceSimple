document.addEventListener('DOMContentLoaded', function() {
  function saveDataToFile(data, filename) {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  document.getElementById("save-button").addEventListener("click", function() {
    const data = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      occupation: document.getElementById("occupation").value,
      housing: document.getElementById("housing").value,
      transportation: document.getElementById("transportation").value,
      food: document.getElementById("food").value,
      entertainment: document.getElementById("entertainment").value,
      utilities: document.getElementById("utilities").value,
      salary: document.getElementById("salary").value,
      bonuses: document.getElementById("bonuses").value,
      investment_income: document.getElementById("investment-income").value,
      savings_goal: document.getElementById("savings-goal").value,
      savings_progress: document.getElementById("savings-progress").value,
      credit_card_debt: document.getElementById("credit-card-debt").value,
      student_loans: document.getElementById("student-loans").value,
      mortgage: document.getElementById("mortgage").value,
      other_debt: document.getElementById("other-debt").value,
      investment_balance: document.getElementById("investment-balance").value,
      asset_allocation: document.getElementById("asset-allocation").value,
      investment_goals: document.getElementById("investment-goals").value
    };
    saveDataToFile(data, "financial_data.json");
  });
});
