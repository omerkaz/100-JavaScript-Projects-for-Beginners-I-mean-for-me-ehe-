let counter = document.querySelector(`#counter`)
let counterValue = 0;
let selectValue = document.querySelector(`#selectValue`)

function Color() {
	if (counterValue < 0) {
		counter.style.color = "#e90056";
	} else if (counterValue > 0) {
		counter.style.color = "#009a60";
	};
}

function up() {
    
    counterValue = parseInt(counter.innerHTML) + parseInt(selectValue.value)
    counter.innerHTML = counterValue
    Color()
}

function down() {
    
    counterValue = parseInt(counter.innerHTML) - parseInt(selectValue.value)
    counter.innerHTML = counterValue
    Color()
}

function reset() {
    counter.style.color = "black";
    counter.innerHTML = 0
    
}