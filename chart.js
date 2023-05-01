function createBudgetChart() {
  setTimeout(function() {
    var chartElement = document.getElementById('budget-chart');
    if (chartElement.chart) {
      chartElement.chart.destroy();
    }

    var ctx = chartElement.getContext('2d');

    var housingLabel = document.querySelector('label[for="housing"]').innerText;
    var transportationLabel = document.querySelector('label[for="transportation"]').innerText;
    var foodLabel = document.querySelector('label[for="food"]').innerText;
    var entertainmentLabel = document.querySelector('label[for="entertainment"]').innerText;
    var utilitiesLabel = document.querySelector('label[for="utilities"]').innerText;

    var housingInput = document.getElementById('housing');
    var transportationInput = document.getElementById('transportation');
    var foodInput = document.getElementById('food');
    var entertainmentInput = document.getElementById('entertainment');
    var utilitiesInput = document.getElementById('utilities');

    chartElement.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [housingLabel, transportationLabel, foodLabel, entertainmentLabel, utilitiesLabel],
        datasets: [{
          data: [housingInput.value, transportationInput.value, foodInput.value, entertainmentInput.value, utilitiesInput.value],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#E7E9ED'
          ]
        }]
      },
      options: {}
    });
  }, 10);
}
