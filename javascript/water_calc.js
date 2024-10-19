// This is the calculation for the water
// Total of gallons = x(# of people) * (y # of days)
// 1 gallon per person per day

document.addEventListener("DOMContentLoaded", function () {
    function waterCalc(people, days) {
      // Calculate total gallons needed
      return people * days;
    }
  
    function handleSubmit(event) {
      event.preventDefault(); // Prevent the default form submission function
  
      // Get user input from the HTML
      const name = document.getElementById("fname").value;
      const email = document.getElementById("email").value;
      const people = parseInt(document.getElementById("people").value); // Convert to integer
      const days = parseInt(document.getElementById("days").value); // Convert to integer
  
      console.log("Form submitted");
      console.log("People: ", people, "Days: ", days); // Log values after they are defined
  
      // Conditional statement to validate input
      if (isNaN(people) || isNaN(days) || people <= 0 || days <= 0) {
        console.log("Please enter valid positive numbers for people and days.");
        return; // Exit if validation fails
      }
  
      const gallons = waterCalc(people, days); // Calculate gallons
  
      // Display results
      const resultMessage = `Hello ${name}, you need ${gallons} gallons of water for ${people} people over ${days} days.`;
      document.getElementById("result-message").innerText = resultMessage; // Show the results in the HTML document
  
      // Hide the form and show results
      document.getElementById("water-form").style.display = "none"; // Hide the form
      document.getElementById("results").style.display = "block"; // Show results
    }
  
    // Attach the event listener for form submission
    const form = document.getElementById("water-form");
    form.addEventListener("submit", handleSubmit); // Correctly attaching the handler
  });
  


