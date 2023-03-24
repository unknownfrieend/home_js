let inp = document.querySelector("input")
let btn = document.querySelector("button")

// btn.onclick = () => {
//     if(inp.value == "Sardor"){
//         alert("To'g'ri topdingiz")
//     }else{
//         alert("Natog'ri ma'lumot")

//     }
// }


btn.onclick = () => {
    if (inp.value == "Sardor") {
        document.write("To'g'ri topdingiz")
    } else {
        document.write("Natog'ri ma'lumot")

    }
}