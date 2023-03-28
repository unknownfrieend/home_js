// let inp = document.querySelector("input")
// let btn = document.querySelector("button")

// btn.onclick = () => {
//     if(inp.value == "Sardor"){
//         alert("To'g'ri topdingiz")
//     }else{
//         alert("Natog'ri ma'lumot")

//     }
// }


// btn.onclick = () => {
//     if (inp.value == "Sardor") {
//         document.write("To'g'ri topdingiz")
//     } else {
//         document.write("Natog'ri ma'lumot")

//     }
// }

// let a = +prompt("")

// for (let i = 1; i <= a; i++){
//     console.log(i);
// }

// let a = +prompt("")

// for (let i = 0; i <= a; i++) {
//     if (i % 2 == 0) {
//         console.log(i, "Juft");
//     } else {
//         console.log(i, "Toq");
//     }
// }



let one = +prompt("Narx kiriting birinchi qiz");
let two = +prompt("Narx kiriting ikkinchi qiz");
let three = +prompt("Narx kiriting uchinchi qiz");
let all = +prompt("Sovg'aning narxi");

alert(NumberPrise(one, two, three, all));
function NumberPrise(a, b, c, d){
    let num = a + b + c
    if(num>d){
        return "Pulingiz yetadi"
    }else{
        return "Pulingiz yetmaydi"
    }
}
