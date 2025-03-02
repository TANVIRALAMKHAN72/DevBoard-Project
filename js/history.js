
document.getElementById('history-btn').addEventListener('click',function(event){
    event.preventDefault();
    const container = document.getElementById('history-container');
    const history = container.querySelectorAll('div.bg-gray-200')
    .forEach(item => item.remove());
    
})

    let tasks = 6;
    const completedButtons = document.querySelectorAll('.completed');
    for (let i = 0; i < completedButtons.length; i++) {
        const button = completedButtons[i];
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const taskCount = document.getElementById('task-count');
            taskCount.innerText = --tasks;
            if (tasks === 0) {
                alert('Congratulations!!! you have completed all the current tasks.');
            }
        
        });
    };
    

    let nav = 22;
    const completedButton = document.querySelectorAll('.completed');
    for (let i = 0; i < completedButton.length; i++) {
        const button = completedButton[i];
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const navButton = document.getElementById('nav-btn');
            navButton.innerText = ++nav;
        });
    };