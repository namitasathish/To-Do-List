const inputbox=document.getElementById("input");
const listcontainer=document.getElementById("listcontainer");

function addtask(){
    if(inputbox.value===''){
        alert("Enter a task to add in the list!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
listcontainer.addEventListener("click", function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");

}
showtask();
window.onload = function() {
    const dateElement = document.getElementById("date");
    const today = new Date();

    const dayName = today.toLocaleDateString(undefined, { weekday: 'long' });
    const monthName = today.toLocaleDateString(undefined, { month: 'long' });
    const day = today.getDate();
    
    // Function to get the ordinal suffix
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th'; // Handles 11th to 20th
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    const dayWithSuffix = day + getOrdinalSuffix(day);
    const formattedDay = `<strong>${dayName}</strong>, ${dayWithSuffix}`;
    const formattedMonth = `<small>${monthName} </small>`;
    
    // Display the day and month on separate lines
    dateElement.innerHTML = `${formattedDay}<br>${formattedMonth}`;
};