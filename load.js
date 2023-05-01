document.addEventListener('DOMContentLoaded', function() {
  const fileInput = document.getElementById("load-file-input");
  fileInput.addEventListener("change", loadFromJSON);

  function loadFromJSON() {
    const reader = new FileReader();

    reader.onload = function() {
      const data = JSON.parse(reader.result);
      document.getElementById("name").value = data.name;
      document.getElementById("age").value = data.age;
      document.getElementById("occupation").value = data.occupation;
      document.getElementById("housing").value = data.housing;
      document.getElementById("transportation").value = data.transportation;
      document.getElementById("food").value = data.food;
      document.getElementById("entertainment").value = data.entertainment;
      document.getElementById("utilities").value = data.utilities;
      document.getElementById("salary").value = data.salary;
      document.getElementById("bonuses").value = data.bonuses;
      document.getElementById("investment-income").value = data.investment_income;
      document.getElementById("savings-goal").value = data.savings_goal;
      document.getElementById("savings-progress").value = data.savings_progress;
      document.getElementById("credit-card-debt").value = data.credit_card_debt;
      document.getElementById("student-loans").value = data.student_loans;
      document.getElementById("mortgage").value = data.mortgage;
      document.getElementById("other-debt").value = data.other_debt;
      document.getElementById("investment-balance").value = data.investment_balance;
      document.getElementById("asset-allocation").value = data.asset_allocation;
      document.getElementById("investment-goals").value = data.investment_goals;
	  updateBudgetSummary();
    };

    const file = fileInput.files[0];
    if (!file) {
      return;
    }

    reader.readAsText(file);
	createBudgetChart();

  }
});
