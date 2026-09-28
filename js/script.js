





// function part start
let heading=document.querySelectorAll("h1")


console.log(heading)

heading.forEach((item)=>{
    console.log(item)
    let counterNumber=item.innerHTML;
let i=0
let javascriptMath =()=>{
    item.innerHTML=(i)
    i++
    if(i == counterNumber)
    clearInterval(stop)
}



// interval part start==

let stop= setInterval(() => {
    javascriptMath()
    
}, item.dataset.delay/counterNumber);
})
