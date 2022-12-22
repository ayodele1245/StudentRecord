//Host: https://ayodele1245.github.io/StudentRecord.github.io/

// Get the modal
var modal = document.getElementById('modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let monthSelect=document.getElementById("month");
let weekSelect=document.getElementById("week");

//Populating the months in select button
let month=["December", "January", "February", "March", "April", "May", "June"];
function populateMonth(){
    for (let i = 0; i < month.length; i++) {
        const option=document.createElement("option");
        option.textContent=month[i]
        monthSelect.appendChild(option);
        
    }
};
populateMonth();
//Populating the weeks in the select button
let week=["Week 1", "Week 2", "Week 3", "Week 4"];
function populateWeek(){
    for (let i = 0; i < week.length; i++) {
    const options= document.createElement("option")
    options.textContent=week[i];
    weekSelect.appendChild(options)    
    }
};

populateWeek();