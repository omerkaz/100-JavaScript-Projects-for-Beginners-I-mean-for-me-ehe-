let quotesOutput = document.querySelector(`#quotesOutput`)
let quotesWriter = document.querySelector(`#quotesWriter`)

function quotesBtn() {
    fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((item) => {
        let indexNum = Math.floor(Math.random()*item.length)
        quotesOutput.innerHTML = item[indexNum].text
        quotesWriter.innerHTML = item[indexNum].author
        }
    )
    .catch((err) => console.log(err.message))
}

quotesBtn()
    