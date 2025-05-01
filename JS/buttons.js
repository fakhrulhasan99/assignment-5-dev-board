let checkboxNum = 23;
let taskNum = 6;

const buttons = document.getElementsByClassName("complete-btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (taskNum > 0) {
            checkboxNum++;
            taskNum--;

            document.getElementById("checkbox-num").innerText = checkboxNum;
            document.getElementById("task-num").innerText = taskNum;

            alert("Board updated succesfully");
            this.disabled = true;

            
            const parentCard = this.closest(".task-card");
            const taskTitle = parentCard.querySelector(".task-title").textContent;

            const time = new Date().toLocaleTimeString();
            const message = `You have completed the task ${taskTitle} at ${time}`;
            const logItem = document.createElement("div");
            logItem.textContent = message;
            logItem.className = "bg-slate-100 p-2 text-slate-700 text-lg rounded-lg"
            
            document.getElementById("history").appendChild(logItem);
        }
        if (taskNum === 0) {
            alert("🎉Congratulations. All tasks are completed!");
        }
    });
}


document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("history").innerHTML = '';
  });