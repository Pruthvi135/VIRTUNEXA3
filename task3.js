document.getElementById("budget-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    
    // Get input values
    const destination = document.getElementById("destination").value.trim();
    const expense = parseFloat(document.getElementById("expense").value);
    const duration = parseInt(document.getElementById("duration").value);
  
    // Validate inputs
    if (!destination || isNaN(expense) || isNaN(duration) || expense < 0 || duration < 1) {
      document.getElementById("result").textContent = "Please provide valid input values.";
      return;
    }
  
    // Calculate total budget
    const totalBudget = expense * duration;
  
    // Display result
    document.getElementById("result").innerHTML = `
      Your trip to <strong>${destination}</strong> will cost approximately 
      <strong>$${totalBudget.toFixed(2)}</strong> for ${duration} days.
    `;
  });
  