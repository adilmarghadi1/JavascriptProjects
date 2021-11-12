const colors = ['green', 'blue', 'yellow', 'red']
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
    const randomNumber = getRandom()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})


function getRandom() {
    return Math.floor(Math.random() * colors.length)
}