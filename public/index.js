var confirmed = document.getElementById("confirmed").innerHTML;
var recovered = document.getElementById("recovered").innerHTML
var deaths = document.getElementById("deaths").innerHTML;

console.log(`confirmed : ${confirmed}`);
console.log(`recovered : ${recovered}`);
console.log(`deaths : ${deaths}`);



new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["confirmed", "deaths", "recovered"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#de1010", "#32a852"],
      data: [confirmed, recovered, deaths]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});