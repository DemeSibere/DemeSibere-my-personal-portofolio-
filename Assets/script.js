var save = document.querySelector("#save");
var listGroup = document.querySelector("#saveList")

function add_local() {
    const display = {};
    display.name = document.getElementById('name').value;
    display.email = document.getElementById('email').value;
    display.subjct = document.getElementById('subject').value;
    display.comment=document.getElementById('comment').value;

    window.localStorage.setItem('display', JSON.stringify(display));

}
function show_local() {
    save.innerHTML = ''

    let _display = JSON.parse(localStorage.getItem("display"));
    document.getElementById('name').value = _display.name;
    document.getElementById('email').value = _display.email;
    document.getElementById('subject').value = _display.subjct;
    document.getElementById('comment').value = _display.comment;

    document.getElementById('display').value = Object.values(_display);
    listGroup.appendChild(display)

}


   show_local();
