//ask user for name
// ask if playing 3 or 6 holes
// prompt user depending on which they pick about of times asking for number of putts for that specific hole
//keep track of cumulative score & compare to total course par
// send one of three messages 

let name = prompt("Welcome to GC mini-golf! What is your name?");

let holes = prompt("Hi, "+name+"! Would you like to play 3 or 6 holes?");
let totalPuts = 0;

if (holes == 3 || holes == 6) {

    for (let i = 1; i <= holes; i++) {
        let numOfPuts = prompt("How many putts for hole "+i+"?");
        totalPuts = totalPuts + parseInt(numOfPuts);
       
    }
    alert(totalPuts);
}

if (holes == 3, totalPuts > 9) {
    alert("Nice try, "+name+"! Your total par was: +"+totalPuts+"");
}

if (holes == 3, totalPuts < 9) {
    alert("Great job, "+name+"! Your total par was: -"+totalPuts+"");

}

if (holes ==3, totalPuts == 9) {
    alert("Good game, "+name+". Your total par was: 0");
}

if (holes == 6, totalPuts > 18) {
    alert("Nice try, "+name+"! Your total par was: +"+totalPuts+"");
}

if (holes == 6, totalPuts < 18) {
    alert("Great job, "+name+"! Your total par was: -"+totalPuts+"");

}

if (holes ==6, totalPuts == 18) {
    alert("Good game, "+name+". Your total par was: 0");
}
