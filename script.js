const emailInput = document.querySelector('.email-input')
const btnSuccess = document.querySelector('.success-btn')
const btnNews = document.querySelector('.news-btn')
const error = document.querySelector('.error');
const main = document.querySelector('.newsletter');
const back = document.querySelector('.success');
const inputText = document.querySelector('input::placeholder')
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[A-Z0-9-]{2,3}$/i;


const checkEmail = (e) => {
    if(emailInput.value.match(regex)) {
        main.classList.remove('show')
        main.classList.add('hide')
        back.classList.add('show')
        back.classList.remove('hide')
        error.textContent = ''  
    } else {
       error.textContent = 'Valid email required'
       emailInput.style.background = 'hsla(4, 100%, 67%,50%)';
       emailInput.classList.add('change-color')
       emailInput.value = ''
    }
}
const removeError = () => {
    if(emailInput.value.length > 0 ) {
        emailInput.style.background = ''
        error.textContent = ''
        emailInput.classList.remove('change-color')  
    }
}
const confirm = () => {
    main.classList.add('show')
        main.classList.remove('hide')
        back.classList.remove('show')
        back.classList.add('hide')
        emailInput.value = ''
}


btnNews.addEventListener('click', checkEmail)
emailInput.addEventListener('keyup', removeError)
btnSuccess.addEventListener('click', confirm)

