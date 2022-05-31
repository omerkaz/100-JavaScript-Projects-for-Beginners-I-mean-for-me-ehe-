let bgImageDOM = document.querySelector(`.bgImage`)

const bgImgArr = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/4.jpg",
    "./assets/5.jpg"
]

let count = 0

function RightBtn() {
    count++

    count > 4 
    ? (count = 0, bgImageDOM.style.backgroundImage = `url('${bgImgArr[count]}')`) 
    : bgImageDOM.style.backgroundImage = `url('${bgImgArr[count]}')`
    
}

function LeftBtn() {
    count--
    
    count < 0 
    ? (count = 4, bgImageDOM.style.backgroundImage = `url('${bgImgArr[count]}')`)
    : bgImageDOM.style.backgroundImage = `url('${bgImgArr[count]}')`
}