let screen = document.getElementById("screen")
let keys = document.querySelector(".keys")


function press(num) {
    screen.value += num
}

function clr(){
    screen.value = null
}

function del(){
    screen.value = screen.value.slice(0, -1)
}




function calc() {
    try {
        let expression = screen.value.replace(/%/g, "/100");
        screen.value = eval(expression);
        
        function calc(){
        screen.value = eval(screen.value)
}

    } catch (error) {
        screen.value = "error"
    }
}
