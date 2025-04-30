

// today's date
const date = document.getElementById("today-date");
const today = new Date();
const dayName = today.toLocaleDateString(undefined, { weekday: 'long'});
const dateName = today.toLocaleDateString(undefined, {year : 'numeric', month : 'long', day : 'numeric'});
date.innerHTML = `${dayName}<br>${dateName}`;


// deadline 5 days later
const deadline = document.getElementsByClassName("deadline");
const deadLine = new Date(today);
deadLine.setDate(today.getDate()+5);
const deadLineName = deadLine.toLocaleDateString(undefined, {year : 'numeric', month : 'long', day : 'numeric'});
for (let i = 0; i < deadline.length; i++) {
    deadline[i].innerHTML = `${deadLineName}`;
  }





