let things = document.querySelectorAll('.thing')
let userinc = 0
let compinc = 0;
let arrthing = ['rock', 'paper', 'sessior']
function elements(index, text) {
    // console.log(index)

    console.log(arrthing[index])
    console.log(text)
    if (arrthing[index] === text) {
        // console.log('draw')
        return 'draw';
    }
    else {
        if (text === 'rock') {
            console.log(arrthing[index])
            return arrthing[index] != 'paper' ? true : false;
        }
        else if (text === 'sessior') {
            console.log(arrthing[index])
            return arrthing[index] === 'paper' ? true : false;
        }
        else {
            console.log(arrthing[index])
            return arrthing[index] === 'rock' ? true : false;
        }
    }
}

function winner(value,c)
{
     console.log(value)
     console.log(c)
     if(c===true)
     {
        winnerscore.innerText=value
     }
     else{
        compscore.innerText=value
     }
}
Array.from(things).forEach((ele, i) => {
    //    console.log(ele)
   
    ele.addEventListener('click', (f) => {
        //    console.log( ele.innerText)
        let index = Math.floor(Math.random() * 3)
        let c = elements(index  ,ele.getAttribute('id'))
        console.log(c)
        if (c === true) {
            userinc++;
            console.log(userinc)
            winner(userinc,c)
            winnerscore.style.color='green'
            compscore.style.color='red'
            whosewin.innerText=`user '${ele.innerText}' dominate computer '${arrthing[index]}' `

        }
        else if (c === false) {
            compinc++;
            console.log(compinc,c)
            winner(compinc,c)
            winnerscore.style.color='red'
            compscore.style.color='green'
            whosewin.innerText=`user '${ele.innerText}' dominated by computer '${arrthing[index]}' `
        }
        else{
            whosewin.innerText=`match Draw play again`
        }

    })
})