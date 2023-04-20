const header = document.getElementById('header-container')
header.style.background = 'green'
const emergencyTasks = document.querySelectorAll('.emergency-tasks h3')
for(index = 0; index < emergencyTasks.length; index+=1){
    emergencyTasks[index].style.backgroundColor = 'purple'
}
const sectionBackground = document.querySelector('section')
sectionBackground.style.background = 'pink'

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3')
for(index = 0; index < noEmergencyTasks.length; index+=1){
    noEmergencyTasks[index].style.background = 'black'
}
const noEmergencyTasksBackgroud = document.querySelector('.no-emergency-tasks')
noEmergencyTasksBackgroud.style.background = 'yellow'

const footer = document.querySelector('#footer-container')
footer.style.background = 'darkgreen'