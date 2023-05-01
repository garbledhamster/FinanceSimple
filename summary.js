function updateBudgetSummary() {
  const salaryInput = document.getElementById("salary");
  const bonusesInput = document.getElementById("bonuses");
  const investmentIncomeInput = document.getElementById("investment-income");
  const incomeSummary = document.getElementById("income-summary");

  const housingInput = document.getElementById("housing");
  const transportationInput = document.getElementById("transportation");
  const foodInput = document.getElementById("food");
  const entertainmentInput = document.getElementById("entertainment");
  const utilitiesInput = document.getElementById("utilities");
  const expensesSummary = document.getElementById("expenses-summary");

  const salary = Number(salaryInput.value);
  const bonuses = Number(bonusesInput.value);
  const investmentIncome = Number(investmentIncomeInput.value);
  const housing = Number(housingInput.value);
  const transportation = Number(transportationInput.value);
  const food = Number(foodInput.value);
  const entertainment = Number(entertainmentInput.value);
  const utilities = Number(utilitiesInput.value);

  if (isNaN(salary) || isNaN(bonuses) || isNaN(investmentIncome) ||
      isNaN(housing) || isNaN(transportation) || isNaN(food) ||
      isNaN(entertainment) || isNaN(utilities)) {
    console.error("One or more input values are not valid numbers");
    return;
  }

  const totalIncome = salary + bonuses + investmentIncome;
  const totalExpenses = housing + transportation + food + entertainment + utilities;
  const totalSavings = totalIncome - totalExpenses;
  const totalDebt = Number(document.getElementById("credit-card-debt").value) +
                    Number(document.getElementById("student-loans").value) +
                    Number(document.getElementById("mortgage").value) +
                    Number(document.getElementById("other-debt").value);
  const totalInvestments = Number(document.getElementById("investment-balance").value);

  incomeSummary.innerText = `Income: $${totalIncome}`;
  expensesSummary.innerText = `Expenses: $${totalExpenses}`;
  createBudgetChart();
}

document.addEventListener('DOMContentLoaded', function() {
  const salaryInput = document.getElementById("salary");
  const bonusesInput = document.getElementById("bonuses");
  const investmentIncomeInput = document.getElementById("investment-income");
  const housingInput = document.getElementById("housing");
  const transportationInput = document.getElementById("transportation");
  const foodInput = document.getElementById("food");
  const entertainmentInput = document.getElementById("entertainment");
  const utilitiesInput = document.getElementById("utilities");

  salaryInput.addEventListener("input", updateBudgetSummary);
  bonusesInput.addEventListener("input", updateBudgetSummary);
  investmentIncomeInput.addEventListener("input", updateBudgetSummary);

  housingInput.addEventListener("input", updateBudgetSummary);
  transportationInput.addEventListener("input", updateBudgetSummary);
  foodInput.addEventListener("input", updateBudgetSummary);
  entertainmentInput.addEventListener("input", updateBudgetSummary);
  utilitiesInput.addEventListener("input", updateBudgetSummary);
});