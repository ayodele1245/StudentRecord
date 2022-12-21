let monthSelect=document.getElementById("month");
let weekSelect=document.getElementById("week");

let month=["December", "January", "February", "March", "April", "May", "June"];
function populateMonth(){
    for (let i = 0; i < month.length; i++) {
        const option=document.createElement("option");
        option.textContent=month[i]
        monthSelect.appendChild(option);
        
    }
};
populateMonth();

let week=["Week 1", "Week 2", "Week 3", "Week 4"];
function populateWeek(){
    for (let i = 0; i < week.length; i++) {
    const options= document.createElement("option")
    options.textContent=week[i];
    weekSelect.appendChild(options)    
    }
};

populateWeek();