
const btn = document.querySelector('button')
// setting up a variable for the button on the html page
btn.addEventListener('click', function (e) {
    const li = document.createElement('li')
    const inp = document.querySelector('input')
    li.textContent = inp.value
    document.querySelector('ul').appendChild(li)
})

p1 = document.getElementById('p1')
p1.addEventListener('click', function (e) {
    p1.innerHTML = 'Howdy'
})

document.querySelector('ul').addEventListener
    ('click', handleClick)

function handleClick(e) {
    console.log(e)
}

const comments = document.querySelector('h3')

if (comments.style.color == 'blue') {
    comments.style.color = 'black'
}
else {
    comments.style.color = 'blue'
}