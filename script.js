class Container {
    play = document.querySelector('#play')
    stop = document.querySelector('#stop')
    split = document.querySelector('#split')
    realTime
    second = 01
    arr = []
    funcİtem

    secondToMinute(a){
        let time = a
        let minute = Math.floor(time / 60)
        let extra = Math.floor(time % 60)
    
        let watch = `${minute <10 ? "0"+minute : minute}:${extra <10 ? "0"+extra : extra}`
        return watch
    }
    playF(){
        clearInterval(this.funcİtem)
        this.funcİtem = setInterval(()=>{
            this.realTime = this.secondToMinute(this.second)
                this.second++
                document.querySelector('#watch').innerHTML = this.realTime
        },
            1000)
        //     function play(){
        //     }
        // )
    }
    stopF(){
        clearInterval(this.funcİtem)
    }
splitF(){
    // clearInterval(startGame.funcİtem)
    this.arr.push(this.realTime)
    document.querySelector("#splitWatch").innerHTML = this.arr.map((q, i)=>{
        return `<div class="d-flex justify-content-between text-white mt-2 pl-3 pr-3 pb-1" style="font-size: 20px; border-bottom: 1px solid #0fa">
        <div>${i+1}.</div>
        <div id="splitWatch">${q}</div>
    </div>`
    }).join("")
}

}
var startGame = new Container()

startGame.play.addEventListener("click", function(){
    startGame.playF()
})
startGame.stop.addEventListener("click", function(){
    startGame.stopF()
})
startGame.split.addEventListener("click", function(){
    startGame.splitF()
})