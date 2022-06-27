let bulbs = document.querySelectorAll('.bulb')
let buttons = document.querySelectorAll('.button')

const clearLights = () => { 
  for (let bulb of bulbs) bulb.style.backgroundColor = "black" 
}

const illuminate = (e) => {

  clearLights()  
  for (let bulb of bulbs){
    if (bulb.id === "stopLight" && e.target.id ==="stopButton") {
        bulb.style.backgroundColor = "red"
        return
    }
    if (bulb.id === "slowLight" && e.target.id ==="slowButton") {
        bulb.style.backgroundColor = "yellow"
        return
    }
    if (bulb.id === "goLight" && e.target.id ==="goButton") {
        bulb.style.backgroundColor = "green"
        return
    }
  }
}

for (let button of buttons) button.onclick = illuminate