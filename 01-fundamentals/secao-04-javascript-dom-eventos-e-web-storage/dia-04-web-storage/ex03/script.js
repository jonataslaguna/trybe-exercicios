const nameForm = document.querySelector('#name-form')
const welcomeDiv = document.querySelector('#welcome')
const logoutBtn = document.querySelector('#logout')

const checkUser = () => {
    const userName = localStorage.getItem('name')
    if(userName){
        nameForm.style.display = 'none'
        welcomeDiv.style.display = 'block'
        const userNameElement = document.querySelector('#username')  
        userNameElement.textContent = userName
        
    }else{
        nameForm.style.display = 'block'
        welcomeDiv.style.display = 'none'
    }    
}


nameForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const nameInput = document.querySelector('#name')
    localStorage.setItem('name', nameInput.value)

    nameInput.value = ''

    checkUser()
})

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('name')

    checkUser()
})

checkUser()

