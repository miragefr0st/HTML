console.log('exercise 3')

let field = document.getElementById("app-field");
let btn = document.getElementById("app-btn");
let listItems = document.getElementById("app-listItems")

btn.addEventListener("click" , () => {
    let text = field.value;
    console.log('text');
    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("app-field").value;
        var t = document.createTextNode(inputValue);
})


