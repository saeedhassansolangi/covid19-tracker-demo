var confirmed = document.getElementById("confirmeds").innerHTML;
var recovered = document.getElementById("recovereds").innerHTML
var deaths = document.getElementById("deathss").innerHTML;

console.log(`confirmed : ${confirmed}`);
console.log(`recovered : ${recovered}`);
console.log(`deaths : ${deaths}`);



new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["confirmed", "recovered","deaths", ],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#32a852","#de1010" ],
      data: [confirmed, recovered, deaths]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Pakistan Covid19 Cases'
    }
  }
});