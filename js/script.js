toss = document.querySelector(".toss")
text = document.querySelector(".text")
toss.addEventListener("click",()=>{
    if(toss.textContent.trim()==="Toss"){
        const decission = Math.floor(Math.random()*2)
        if(decission){
            toss.textContent = "Head"
            
        }
        else {
            toss.textContent = "Tail"
        }
        text.textContent = "Play Again"
    }
})
text.addEventListener("click",()=>{
    if(text.textContent.trim() === "Play Again"){
        toss.textContent = "Toss"
        text.textContent = "Click on Toss"
    }
})