
document.getElementById('completed-btn-1').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updated successfully');
    document.getElementById('completed-btn-1');
    const container = document.getElementById('history-container');
    const div = document.createElement('div');
    const curentTime = new Date();
    const timeString = curentTime.toLocaleTimeString();
    div.classList.add("bg-gray-200", "ml-3", "mr-3", "rounded-xl", "p-2", "mt-4");
    div.innerHTML =`
    <h1 class ="text-gray-500 px-4 font-bold">You have completed the task Fix Mobile Button Issue at ${timeString}</h1>
    `
    container.appendChild (div)
    document.getElementById('completed-btn-1').disabled = true;
    this.classList.add('bg-gray-300');

    })
    

document.getElementById('completed-btn-2').addEventListener('click',function(event){
event.preventDefault();
alert('Board updated successfully');
document.getElementById('completed-btn-2');
const container = document.getElementById('history-container');
const div = document.createElement('div');
const curentTime = new Date();
const timeString = curentTime.toLocaleTimeString();
div.classList.add("bg-gray-200", "ml-3", "mr-3", "rounded-xl", "p-2", "mt-4");
div.innerHTML =`
<h1 class ="text-gray-500 px-4 font-bold">You have completed the task Add Dark Mode at ${timeString}</h1>
`
container.appendChild (div)
document.getElementById('completed-btn-2').disabled = true;
this.classList.add('bg-gray-300');

})




document.getElementById('completed-btn-3').addEventListener('click',function(event){
event.preventDefault();
alert('Board updated successfully');
document.getElementById('completed-btn-3');
const container = document.getElementById('history-container');
const div = document.createElement('div');
const curentTime = new Date();
const timeString = curentTime.toLocaleTimeString();
div.classList.add("bg-gray-200", "ml-3", "mr-3", "rounded-xl", "p-2", "mt-4");
div.innerHTML =`
<h1 class ="text-gray-500 px-4 font-bold">You have completed the task Optimize Home page at ${timeString}</h1>
`
container.appendChild (div)
document.getElementById('completed-btn-3').disabled = true;
this.classList.add('bg-gray-300');

})
document.getElementById('completed-btn-4').addEventListener('click',function(event){
event.preventDefault();
alert('Board updated successfully');
document.getElementById('completed-btn-4');
const container = document.getElementById('history-container');
const div = document.createElement('div');
const curentTime = new Date();
const timeString = curentTime.toLocaleTimeString();
div.classList.add("bg-gray-200", "ml-3", "mr-3", "rounded-xl", "p-2", "mt-4");
div.innerHTML =`
<h1 class ="text-gray-500 px-4 font-bold">You have completed the task Add new emoji 🤲 at ${timeString}</h1>
`
container.appendChild (div)
document.getElementById('completed-btn-4').disabled = true;
this.classList.add('bg-gray-300');

})



document.getElementById('completed-btn-5').addEventListener('click',function(event){
event.preventDefault();
alert('Board updated successfully');
document.getElementById('completed-btn-5');
const container = document.getElementById('history-container');
const div = document.createElement('div');
const curentTime = new Date();
const timeString = curentTime.toLocaleTimeString();
div.classList.add("bg-gray-200", "ml-3", "mr-3", "rounded-xl", "p-2", "mt-4");
div.innerHTML =`
<h1 class ="text-gray-500 px-4 font-bold">You have completed the task Integrate OpenAI API at ${timeString}</h1>
`
container.appendChild (div)
document.getElementById('completed-btn-5').disabled = true;
this.classList.add('bg-gray-300');

})



document.getElementById('completed-btn-6').addEventListener('click',function(event){
event.preventDefault();
alert('Board updated successfully');
document.getElementById('completed-btn-6');
const container = document.getElementById('history-container');
const div = document.createElement('div');
const curentTime = new Date();
const timeString = curentTime.toLocaleTimeString();
div.classList.add("bg-gray-200", "ml-3", "mr-3", "rounded-xl", "p-2", "mt-4");
div.innerHTML =`
<h1 class ="text-gray-500 px-4 font-bold">You have completed the task Improve Job searching at ${timeString}</h1>
`
container.appendChild (div)
document.getElementById('completed-btn-6').disabled = true;
this.classList.add('bg-gray-300');

})

const dateDisplay = document.getElementById('date-display');
const currentDate = new Date();
dateDisplay.innerText = currentDate.toDateString();

let colorIndex = 0;
document.getElementById('color-btn').addEventListener('click', function() {
        const body = document.body;
    const colors = ['bg-gray-200', 'bg-red-300', 'bg-blue-300', 'bg-green-300', 'bg-yellow-300', 'bg-indigo-300', 'bg-purple-300', 'bg-pink-300', 'bg-gray-300', 'bg-green-200'];
    body.classList.remove(...colors);
    body.classList.add(colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
});
