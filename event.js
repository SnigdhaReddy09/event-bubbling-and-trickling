const GP=document.getElementById("grand")
const P=document.getElementById("parent")
const C=document.getElementById("child")

GP.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("grand parent clicked");
        GP.style.backgroundColor="purple"
    })
},true)

P.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("parent clikced");
        P.style.backgroundColor="yellow"
    })
},true)

C.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("child clicked");
        C.style.backgroundColor="lightblue"
    })
},true)

const GP2=document.getElementById("grand2")
const P2=document.getElementById("parent2")
const C2=document.getElementById("child2")

GP2.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("grandparent clikced");
        GP2.style.backgroundColor="lightgreen"
    })
},false)

P2.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("parent clikced");
        P2.style.backgroundColor="orange"
    })
},false)

C2.addEventListener("click",()=>{
    setTimeout(()=>{
        console.log("child clikced");
        C2.style.backgroundColor="lightpink"
    })
},false)

