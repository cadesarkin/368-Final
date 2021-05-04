function game(id) {
    let count = 0;
    row = parseInt(id.charAt(3));
    column = parseInt(id.charAt(10));
    if (count % 2 == 0) {
        player1click(id);
    } else {
        player2click(id);
    }
    count++;
}

function checkArea() {

}
function player1click(id) {
    document.getElementById(id).style.backgroundColor="yellow";
}
function player2click(id) {
    document.getElementById(id).style.backgroundColor="red";
}
