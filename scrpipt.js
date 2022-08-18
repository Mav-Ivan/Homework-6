
// task 1 
// option 1 

// let test = document.getElementById('test')
// test.innerText = "Last"

// option 2 

// let test = document.querySelector('div#test')
// test.innerHTML = "Last"


// task 2 

// let img = document.querySelector('img.image')
// img.src = './images/cat.jpg'
// alert(img.getAttribute("src"))


// task 3 

// let paragraphs = document.querySelector("div#text").querySelectorAll("p")

// for (let i = 0; i < paragraphs.length; i++) {
    
//     let p = document.createElement('p')
//     p.innerText = `Selector text ${i} : ${paragraphs[i].innerText}`
//     document.querySelector('div#output').appendChild(p)
// }


// task 4
//option 1

// let list = document.querySelector('ul#list').childNodes
// alert(list[1].textContent)
// alert(list[9].textContent)
// alert(list[3].textContent)
// alert(list[7].textContent)
// alert(list[5].textContent)

//option 2

// let list = document.querySelector('ul#list').children
// alert(list[0].textContent)
// alert(list[4].textContent)
// alert(list[1].textContent)
// alert(list[3].textContent)
// alert(list[2].textContent)


// task 5 

// document.querySelector('h1#header').setAttribute("class", "header")

// let div = document.querySelector('div#myDiv').children
// console.log(div);
// div[0].setAttribute('class', "fParag")
// div[1].setAttribute('class', "sParag")
// div[2].setAttribute('class', "tParag")
// div[3].setAttribute('class', "foParag")

// let list = document.querySelector('ul#myList')
// list.style.listStyleType = "none"
// list.style.display = "flex"

// document.querySelector('span').style.display = "none"

// task 6

// let fMessage = prompt("Enter 1 text:")
// let sMessage = prompt("Enter 2 text:")

// let finput = document.querySelector("input#input1")
// let sinput = document.querySelector("input#input2")

// finput.value = fMessage 
// sinput.value = sMessage 

// finput.value = sMessage
// sinput.value = fMessage

// task 7 


let main = document.createElement('main')
main.setAttribute("class", "mainClass check item")
document.body.appendChild(main)

let div = document.createElement("div")
div.setAttribute("id", "myDiv")
let p = document.createElement('p')
p.innerText = "First paragraph"
div.appendChild(p)
main.appendChild(div)





