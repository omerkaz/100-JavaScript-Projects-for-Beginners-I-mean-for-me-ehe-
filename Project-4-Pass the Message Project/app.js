let input = document.querySelector(`#input`)
let output = document.querySelector(`#output`)
let infoText = document.querySelector(`#infoText`)
let submitBtn = document.querySelector(`#submitBtn`)

submitBtn.addEventListener("click", passCheck)

function passCheck(e) {
    e.preventDefault()
    if(input.value === "") {
        infoText.classList.replace("d-block","d-none")
        output.innerHTML = "Please enter a value to pass"
        setTimeout(function(){
            output.innerHTML = ""
        }, 2000)
    }else {
        infoText.classList.replace("d-none","d-block")
        output.innerHTML = input.value
        input.value = ""
    }
}
