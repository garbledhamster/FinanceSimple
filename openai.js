document.addEventListener('DOMContentLoaded', function() {

// Function to send data to OpenAI API and get a financial plan
async function generateFinancialPlan(data) {
  const openaiAPI = 'https://api.openai.com/v1/chat/completions';
  const openaiAPIKey = '{{ secrets.OPENAI_API_KEY }}';
  const prompt = "You will be a financial advisor.  Your goal is to provide financial recommendations based off of the information provided.  You must not make any reference to being an AI.  Your one job is to provide a financial plan to the person.  If any of the values in the json data are empty, make a note to the person that you can provide better recommendation if all of the values are completed above. Make sure to put a disclaimer at the very end that this information should be reviewed with a real tax professional before taking any actions. Check the salary against the job title and confirm if it is a fair wage or not, use labor statistics from within the past 5 years to make this determination. Output the recommendations in a paragraph format, not like a letter, just explain each recommendation without using 'I' language." + JSON.stringify(data)

  console.log(prompt);

  try {
    const response = await axios.post(openaiAPI, {
      model: 'gpt-3.5-turbo',
      messages: [
          { role: "user", content: prompt }
        ],
      temperature: 1,
    }, {
      headers: {
        'Authorization': `Bearer ${openaiAPIKey}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
  const plan = response.data.choices[0].message.content;

  document.getElementById("recommendations").innerHTML = plan;
  document.getElementById("recommendations").style.whiteSpace = "pre-wrap";
  } catch (error) {
    console.error(error);
    let errorMessage = error.response ? error.response.data.error.message : error.message;
    document.getElementById("recommendations").innerHTML = "<p>Error: " + errorMessage + "</p>";
  }
}




// Add an event listener to the generate button
document.getElementById("generate-button").addEventListener("click", function() {
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
  generateFinancialPlan(data);
});
});
