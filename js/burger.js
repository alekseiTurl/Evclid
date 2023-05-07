document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#burger-menu').classList.toggle('is-active')
    })
    document.querySelector('#burger-exit').addEventListener('click', function() {
        document.querySelector('#burger-menu').classList.toggle('is-active')
    })
})
