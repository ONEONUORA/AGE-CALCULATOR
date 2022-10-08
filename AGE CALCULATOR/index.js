// function age(){
//     let you=prompt('ENTER YOUR NAME')
//     let age= prompt('ENTER YOUR AGE')
//     let daysLived= age * 365
//      alert(you + ' HAVE LIVED ' + daysLived + ' DAYS ON EARTH ')
    
// }
// age()
let button = document.querySelector('button');

function love() {
    // e.preventDefault();
    let name = document.querySelector(".one").value.toUpperCase()
    let age = document.querySelector(".two").value
    let daysLived= age * 365

    
    
    if (!name || !age){
       return
    // }else if ( !location) {
    //     return
    // } else if (!person) {
    //     return
 } else {
       return alert( name  +  " HAVE LIVED  " + daysLived  + ' DAYS ON EARTH')

    }
}
button.addEventListener('click',love)
