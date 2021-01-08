/* Increase/Decrease Counter */

/* 

- select button (- or + )
- select number 
- add event listener to the button
- update the dom once clicked 

*/

/* add comment */

/*

- select form
- get form value 
- add event listener
- event.preventDefault() since it's a submit

*/

/* dom manipulation */

const likeButton = document.querySelector('#heart')
const counter = document.querySelector('#counter')
const addButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const pauseButton = document.querySelector('#pause')
const likeList = document.querySelector('.likes')
let counterNumber = setInterval(function () { counter.textContent++ }, 1000)
let numOfLikes = 0

/* event listeners */

addButton.addEventListener('click', function (event) {
    counter.textContent++
})

minusButton.addEventListener('click', function (event) {
    counter.textContent = counter.textContent - 1
})

likeButton.addEventListener('click', function (event) {
    const like = document.createElement("li")
    like.setAttribute("id", counter.textContent)
    const match = likeList.children.namedItem(`${counter.textContent}`)

    if (match) {
        // console.log(match)
        match.dataset.counter = parseInt(match.dataset.counter) + 1
        match.textContent = `${match.id} has been liked ${match.dataset.counter} times`

    } else {
        like.dataset.counter = 1
        like.textContent = `${likeList.id} has been liked ${like.dataset.counter} times`
        likeList.append(like)
    }

})

pauseButton.addEventListener('click', function () {
    clearInterval(counterNumber)
})

/* render function */

function beginTimer() {
    counter.textContent = counterNumber
}

beginTimer()
