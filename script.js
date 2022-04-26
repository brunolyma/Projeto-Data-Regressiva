function currentDate() {
    const date = new Date()
    let day = date.getDate()
    if(day < 10) {
        day = '0' + day
    }
    let month = date.getMonth() + 1
    if(month < 10) {
        month = '0' + month
    }
    const year = date.getFullYear()
    const currentDate = `${year}-${month}-${day}` 
    return currentDate
}
const date = document.getElementById('date')
if(!date.value) {
    date.setAttribute('min', currentDate())
    date.setAttribute('value', currentDate())
}
const second = 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour
let finalDate
let total
let set

if(localStorage.getItem('timer')) {
    finalDate = localStorage.getItem('timer')
    set = setInterval('timer()', 1000)
}

function start() {
    const date = document.querySelector( 'input[type="date"]' ).value
    finalDate = new Date(date).getTime()
    window.localStorage.setItem('timer', finalDate)
    set = window.setInterval('timer()', 1000)
}
function timer() {
    let now = new Date().getTime()
    total = finalDate - now

    const days = Math.floor( total /  day )
    const hours = Math.floor( ( total % day ) / hour ) + 3
    const minutes = Math.floor( ( total % hour ) / minute )
    const seconds = Math.floor( ( total % minute ) / second )
    
    let h2 = document.querySelector('h2')
    h2.innerText = `${days}dias ${hours}horas ${minutes}minutos ${seconds}segundos`
}

function reset() {
    document.querySelector('h2').innerText = ' 🤓 '
    window.clearInterval(set)
    window.localStorage.removeItem('timer')
}
