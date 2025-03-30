function addTask (){
    let taskInput = document.getElementById("inputs");
    let taskValue=taskInput.value; 
    if(taskValue==="")
        return;
    let li =document.createElement("li");
    li.innerText = taskValue;
    li.onclick = function(){
        this.remove ();
    }
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value =""
     
}