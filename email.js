

const scriptURL = 'https://script.google.com/macros/s/AKfycby_9tQdt5qkZeB5DFuUATc7psF0ZjmGCQb5Un6MVwm9ucqKzDHUFJQ3gL0HoTlWtvNI/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thanks For Subscribing!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})