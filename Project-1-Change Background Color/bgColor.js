let body = document.querySelector(`body`)

function bGChange() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${x},${y},${z})`
    
}
