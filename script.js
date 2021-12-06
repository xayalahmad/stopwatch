let play = document.querySelector('#play')
let stop = document.querySelector('#stop')
let split = document.querySelector('#split')
let realTime
let second = 05
let arr = []
let funcİtem

function secondToMinute(a){
    let time = a
    let minute = Math.floor(time / 60)
    let extra = Math.floor(time % 60)

    let watch = `${minute <10 ? "0"+minute : minute}:${extra <10 ? "0"+extra : extra}`
    return watch
}


play.addEventListener("click", function(){
    clearInterval(funcİtem)
    funcİtem = setInterval(
        function play(){
            realTime = secondToMinute(second)
            second++
            document.querySelector('#watch').innerHTML = realTime
        },
        1000
    )
}
)
stop.addEventListener("click", function(){
    clearInterval(funcİtem)
})
split.addEventListener("click", function(){
    // clearInterval(funcİtem)
    arr.push(realTime)
    document.querySelector("#splitWatch").innerHTML = arr.map((q)=>{
        return `<h5 id="splitWatch">${q}</h5>`
    }).join("")
})