let darkbtn = document.querySelector("#dark").addEventListener("click",clickDark)
console.log("darker version")
function clickDark(){
    bd = document.querySelector("body")
    if (bd.classList.contains("lightsOff")){
        document.querySelector("#dark").innerHTML = "lights on"
        bd.classList.remove("lightsOff")
    }
    else{
        document.querySelector("#dark").innerHTML = "lights off"
        bd.classList.add("lightsOff")
    }
}