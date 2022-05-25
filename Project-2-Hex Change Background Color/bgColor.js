let body = document.querySelector(`body`)
let hexColor = [
    "1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g"
]
let choosenHex = "";
function bGChange() {

    for (let i = 0; i < 6; i++){
        
        choosenHex += hexColor[Math.floor(Math.random() * hexColor.length)]
        console.log(choosenHex)
    }
    
    body.style.backgroundColor = `#${choosenHex}`

    choosenHex = ""
}
