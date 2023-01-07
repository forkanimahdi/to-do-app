const body = document.getElementById("body")
const  darkmode = document.getElementById('darkmode')
var  createtaskarea = document.getElementById('createtaskarea')
const  createit = document.getElementById('createit')
const  createToDo = document.querySelector('.createToDo')
const  lightbackg = document.querySelector('.bg-desktop-light')
const  darkbackg = document.querySelector('.bg-desktop-dark')
const  taskcontainer = document.getElementById('taskcontainer')
const  containerfooter = document.querySelector('.containerfooter')
const  itemsleft = document.querySelector('.itemsleft')
const  allitems = document.getElementById('allitems')
const  activeitems = document.getElementById('activeitems')
const  completedtasks = document.getElementById('completedtasks')
const  clearcompleted = document.getElementById('clearcompleted')
const  taskdetaill = document.getElementById('taskdetaill')
const  task = document.querySelector('.task')
const deletetask = document.getElementById('deletetask')
const  crosstask = document.getElementById('crosstask')
const  taskcompleted = document.querySelector('.taskcompleted')
const  taskdonebutton = document.getElementById('taskdonebutton')
const  taskimage = document.getElementById('taskimage')
const  numberofitemleft = document.getElementById('numberofitemleft')

var itemnumber = 0

numberofitemleft.innerHTML = itemnumber  


createit.addEventListener("click",()=>setTask())
function setTask(){
    // create task //
    if(createtaskarea.value != ''){
let settask = document.createElement("div")
settask.className ="task"
let settaskdonebutton = document.createElement("button")
settaskdonebutton.classList.add ('taskdonebutton')
settask.appendChild(settaskdonebutton)
let settaskdetaill = document.createElement("p")
settaskdetaill.classList.add ('taskdetaill')
settaskdetaill.textContent = createtaskarea.value
settask.appendChild(settaskdetaill)
var settaskimage = document.createElement("img")
settaskimage.id = 'taskimage'
settaskimage.src = 'images/icon-check.svg'
settask.appendChild(settaskimage)
var setdeletetask = document.createElement('img')
setdeletetask.id = 'deletetask'
setdeletetask.src = 'images/icon-cross.svg'
settask.appendChild(setdeletetask)
taskcontainer.appendChild(settask)
createtaskarea.value = ''
//check the task when its done //
 settaskdonebutton.addEventListener("click",()=>{
    if(settask.className == "task"){
        settask.className = 'taskcompleted'
        settaskdetaill.className = 'crosstask'
        settaskdonebutton.id = 'taskfinished'
        settaskimage.style.display = 'initial'
        itemnumber = itemnumber - 1 
        numberofitemleft.innerHTML = itemnumber 

    }
    else if( settask.className == 'taskcompleted'){
        settask.className = 'task'
        settaskdetaill.className = 'taskdetaill'
        settaskdonebutton.id = 'taskdonebutton'
        settaskimage.style.display = 'none'
        itemnumber = itemnumber + 1 
        numberofitemleft.innerHTML = itemnumber 

    }
})
//Delete task  //
setdeletetask.addEventListener("click",()=>{
taskcontainer.removeChild(settask)
itemnumber = itemnumber - 1 
numberofitemleft.innerHTML = itemnumber 
     
})
// completed items filter//
clearcompleted.addEventListener("click",()=>{
    if(settask.className != 'task'){
     settask.style.display = 'none'
    

    }

})

    }

itemnumber = itemnumber + 1 
numberofitemleft.innerHTML = itemnumber 
     
}

   body.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        setTask()
    }
});
